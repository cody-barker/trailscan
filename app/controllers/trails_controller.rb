class TrailsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_trail_not_found_resp
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_resp

    def index
        trails = Trail.all
        render json: trails
    end

    def create
        trail = Trail.create!(trail_params)
        render json: trail, status: :created
    end

    def short_trails
        trails = Trail.all.where("length < ?", params[:num])
        if trails.any?
            users = trails.map { |trail| trail.users}
            render json: users.flatten.uniq.to_json
        else
            render json: {error: "No trails are shorter than #{params[:num]} miles long."}, status: :not_found
        end
    end

    private

    def trail_params
        params.permit(
            :name,
            :difficulty,
            :length,
            :description,
            :dogs_allowed,
            :family_friendly,
            :trailhead_coordinates,
            :photo)
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
