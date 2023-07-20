class ReviewsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found_resp
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_resp
before_action :authorize

    def create
        user = find_user_by_session_id
        review = user.reviews.create!(review_params)
        render json: review, status: :created
    end

    def update
        user = find_user_by_session_id
        review = user.reviews.find(params[:id])
        if review
            review.update!(review_params)
            render json: review, status: :accepted
        else
            render json: {error: "Not authorized"}, status: :unauthorized
        end
    end

    def destroy
        user = find_user_by_session_id
        review = user.reviews.find(params[:id])
        if review
            review.destroy
            render json: {}, status: :no_content
        else
            render json: {error: "Not authorized"}, status: :unauthorized
        end

    end

    private

    def find_user_by_session_id
        User.find_by(id: session[:user_id])
    end

    def review_params
        params.permit(
            :id,
            :review_id,
            :user_id,
            :trail_id,
            :date,
            :trail_rating,
            :condition,
            :content)
    end

    def render_unprocessable_entity_resp(e)
        render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity
    end

    def render_record_not_found_resp
        render json: {error: "Record not found."}, status: :not_found
    end

    def authorize
        render json: {error: "Not authorized."}, status: :unauthorized unless session[:user_id]
    end

end
