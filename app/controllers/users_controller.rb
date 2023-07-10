class UsersController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_user_not_found_resp
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_resp

    def index
        render json: User.all
    end

    def show
        user = find_user
        render json: user
    end

    def create
        user = User.create!(user_params)
        render json: user, status: created
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



end
