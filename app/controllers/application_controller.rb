class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorize

  def authorize
    render json: {error: "Not authorized."}, status: :unauthorized unless session[:user_id]
  end
end
