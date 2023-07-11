class TrailsController < ApplicationController

rescue_from ActiveRecord::RecordNotFound, with: :render_trail_not_found_resp
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_resp
#before_action :authorize

    def index
        if params[:user_id]
            user = User.find_by(id: params[:user_id])
            trails = user.trails
            render json: trails, include: :user
        else
            render json: Trail.all
        end
    end

    def show
        trail = find_trail
        render json: trail
    end

    def create
        user = User.find_by(id: session[:user_id])
        trail = user.trails.create!(trail_params)
        render json: trail, include: :user
    end

    def update
        trail = find_trail
        trail.update!(trail_params)
        render json: trail, status: :accepted
    end

    def destroy
        trail = find_trail
        trail.destroy
        render json: {}, status: :no_content
    end

    private

    def find_trail
        Trail.find(params[:id])
    end

    def trail_params
        params.permit(
            :average_rating,
            :number_of_reviews,
            :difficulty,
            :length,
            :description,
            :dogs_allowed,
            :family_friendly,
            :trailhead_coordinates)
    end

    def render_trail_not_found_resp
        render json: {error: "Trail not found."}, status: :not_found
    end

    def render_unprocessable_entity_resp(e)
        render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity
    end

    def authorize
        render json: {error: "Not authorized."}, status: :unauthorized unless session[:user_id]
    end

end
