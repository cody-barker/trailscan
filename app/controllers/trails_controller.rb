class TrailsController < ApplicationController

rescue_from ActiveRecord::RecordNotFound, with: :render_trail_not_found_resp
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_resp
before_action :authorize

private

def find_trail
    Trail.find(params[:id])
end

def trail_params
    params.permit(:name, :city, :state, :profile_image)
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
