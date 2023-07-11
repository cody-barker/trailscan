class UsersController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_user_not_found_resp
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_resp
before_action :authorize

    def index
        if params[:trail_id]
            trail = Trail.find_by(id: params[:trail_id])
            users = trail.users
            render json: users, include: :trail
        else
            render json: User.all
        end
    end

    def show
        user = find_user
        render json: user
    end

    def create
        user = User.create!(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
        user = find_user
        user.update!(user_params)
        render json: user, status: :accepted
    end
    
    def destroy
        user = find_user
        user.destroy
        head :no_content
    end

    private

    def find_user
        User.find(params[:id])
    end

    def user_params
        params.permit(:name, :city, :state, :profile_image)
    end

    def render_user_not_found_resp
        render json: {error: "User not found."}, status: :not_found
    end

    def render_unprocessable_entity_resp(e)
        render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity
    end

    def authorize
        render json: {error: "Not authorized."}, status: :unauthorized unless session[:user_id]
    end



end
