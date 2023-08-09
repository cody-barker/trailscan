class TrailsController < ApplicationController
    skip_before_action :authorize, only: :popular_trails

    def index
        trails = Trail.all
        render json: trails
    end

    def create
        trail = Trail.create!(trail_params)
        render json: trail, status: :created
    end

    def short_trails_users
        trails = Trail.all.where("length < ?", params[:num])
        if trails.any?
            users = trails.map { |trail| trail.users}
            render json: users.flatten.uniq.to_json
        else
            if params[:num] == "1"
                render json: {error: "No trails are shorter than #{params[:num]} mile long."}, status: :not_found
            else
                render json: {error: "No trails are shorter than #{params[:num]} miles long."}, status: :not_found
            end
        end
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
