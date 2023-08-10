class TrailsController < ApplicationController
    skip_before_action :authorize, only: [:popular_trails, :short_trails_users]

    def index
        trails = Trail.all
        render json: trails
    end

    def create
        trail = Trail.create!(trail_params)
        render json: trail, status: :created
    end

    def popular_trails
        trails = Trail.all.select{|t| t.reviews.count >= params[:num].to_i}
        if trails.any?
            render json: trails
        else
            render json: {error: "No trails have more than #{params[:num]} reviews."}
        end
    end

    private

    def trail_params
        params.permit(
            :name,
            :difficulty,
            :length,
            :description,
            :dogs_allowed,
            :family_friendly,
            :trailhead_coordinates,
            :photo)
    end

end
