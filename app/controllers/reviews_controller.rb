class ReviewsController < ApplicationController
    
    def index
        reviews = Review.all
        render json: reviews
    end

    def show
        review = Review.find(params[:id])
        render json: review
    end

    def create
        user = find_user_by_session_id
        review = user.reviews.create!(review_params)
        render json: review, status: :created
    end

    def update
        user = find_user_by_session_id
        review = user.reviews.find(params[:id])
        review.update!(review_params)
        render json: review, status: :accepted
    end

    def destroy
        user = find_user_by_session_id
        review = user.reviews.find(params[:id])
        review.destroy
        render json: {}, status: :no_content
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

end
