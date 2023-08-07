class TrailsController < ApplicationController

    def index
        trails = Trail.all
        render json: trails
    end

    def create
        trail = Trail.create!(trail_params)
        render json: trail, status: :created
    end

    def short_trails
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
