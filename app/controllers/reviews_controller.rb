class ReviewsController < ApplicationController


    def index
        reviews = Review.all.order(date: :desc)
        render json: reviews
    end

    def show
        review = Review.find(params[:id])
        render json: review
    end

    #access trail_id from /trails/:id and save in state
    #create with user.reviews.create to associate with user
    def create
        user = User.find_by(id: session[:user_id])
        user.reviews.create!(review_params)
        render json: review, status: :created
    end

    private

    def review_params
        params.permit(:user_id, :trail_id, :date, :trail_rating, :condition, :content)
    end

end
