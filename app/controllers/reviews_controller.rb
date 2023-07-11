class ReviewsController < ApplicationController


    def index
        reviews = Review.all.order(date: :desc)
        render json: reviews, include: :trail
    end

    def show
        review = Review.find(params[:id])
        render json: review
    end

end
