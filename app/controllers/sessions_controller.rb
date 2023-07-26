class SessionsController < ApplicationController
skip_before_action :authorize, only: [:create, :destroy]

    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: ["Incorrect username or password"]}, status: :unauthorized
        end
    end

    def destroy
        if session[:user_id]
            session.delete(:user_id)
            render json: {}, status: :no_content
        else
            render json: {errors: ["Unauthorized"]}, status: :unauthorized
        end
    end
end
