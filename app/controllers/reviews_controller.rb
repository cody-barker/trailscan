class ReviewsController < ApplicationController


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
        user.reviews.create!(review_params)
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
        params.permit(:review_id, :user_id, :trail_id, :date, :trail_rating, :condition, :content)
    end

end
