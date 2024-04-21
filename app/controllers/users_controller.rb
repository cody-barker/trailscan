class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]

    def index
        render json: User.all
    end

    def show
        user = User.find_by(id: session[:user_id])
        render json: user, status: :created
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def num_of_trails
        user = User.find(params[:id])
        render json: user, serializer: UserTrailSerializer
    end

    
    def user_trail_counts
        users = User.all
        render json: users, each_serializer: UserTrailSerializer
    end

    private

    def find_user
        User.find(params[:id])
    end

    def user_params
        params.permit(
            :username, 
            :password,
            :password_confirmation, 
            :city, 
            :state, 
            :profile_image)
    end

end
