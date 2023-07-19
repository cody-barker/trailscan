class ReviewsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_user_not_found_resp
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_resp
before_action :authorize
skip_before_action :authorize, only: [:index, :show]

    def index
        if params[:user_id]
            user = User.find_by(id: params[:user_id])
            reviews = user.reviews.order(date: :desc)
            render json: reviews
        elsif params[:trail_id]
            trail = Trail.find_by(id: params[:trail_id])
            reviews = trail.reviews.order(date: :desc)
            render json: reviews
        else
            reviews = Review.all.order(date: :desc)
            render json: reviews
        end
    end

    def show
        if params[:user_id]
            review = user.reviews.find()
        review = Review.find(params[:id])
        render json: review
        end
    end

    #access trail_id from /trails/:id and save in state
    #create with user.reviews.create to associate with user
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
