class TrailsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_trail_not_found_resp
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_resp
before_action :authorize
# skip_before_action :authorize, only: [:index, :show]
#index /trails in TrailsContext
#create '/trails' in TrailCreate

    def index
        # if params[:user_id]
        #     user = User.find_by(id: params[:user_id])
        #     trails = user.trails
        #     render json: trails
        # else
            trails = Trail.all
            render json: trails
        # end
    end

    # def show
    #     trail = find_trail
    #     render json: trail
    # end

    def create
        trail = Trail.create!(trail_params)
        render json: trail, status: :created
    end

    # def update
    #     user = find_user_by_session_id
    #     trail = find_trail
    #     if user.trails.includes(:id).where('trail.id = ?', 'trail.id')
    #         trail.update!(trail_params)
    #         render json: trail, status: :accepted
    #     else
    #         render json: {error: "Not authorized"}, status: :unauthorized
    #     end
    # end

    # def destroy
    #     user = find_user_by_session_id
    #     trail = user.trails.find(params[:id])
    #     trail.destroy
    #     render json: {}, status: :no_content
    # end

    private

    # def find_trail
    #     Trail.find(params[:id])
    # end

    # def find_user_by_session_id
    #     User.find_by(id: session[:user_id])
    # end

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
