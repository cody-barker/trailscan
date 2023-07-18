class ReviewsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_user_not_found_resp
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_resp
before_action :authorize
skip_before_action :authorize, only: [:index, :show]

    def index
        reviews = Review.all.order(date: :desc)
        render json: reviews
    end

    def show
        review = find_review
        render json: review
    end

    #access trail_id from /trails/:id and save in state
    #create with user.reviews.create to associate with user
    def create
        user = User.find_by(id: session[:user_id])
        review = user.reviews.create!(review_params)
        render json: review, status: :created
    end

    def update
        review = find_review
        review.update!(review_params)
        render json: review, status: :accepted
    end

    def destroy
        review = find_review
        review.destroy
        render json: {}, status: :no_content
    end

    private

    def find_review
        Review.find(params[:id])
    end

    def review_params
        params.permit(:id, :review_id, :user_id, :trail_id, :date, :trail_rating, :condition, :content)
    end

    def render_unprocessable_entity_resp(e)
        render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity
    end

    def render_review_not_found_resp
        render json: {error: "Review not found."}, status: :not_found
    end

    def authorize
        render json: {error: "Not authorized."}, status: :unauthorized unless session[:user_id]
    end

end
