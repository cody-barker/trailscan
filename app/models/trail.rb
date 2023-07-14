class Trail < ApplicationRecord
    has_many :reviews, dependent: :delete_all
    has_many :users, through: :reviews
    validates :difficulty, inclusion: {in: ["Easy", "Moderate", "Hard"]}
    validates :length, numericality: {greater_than: 0}
    validates :description, presence: :true
    validates :description, length: {minimum: 10, maximum: 1000}
    validates :dogs_allowed, inclusion: {in: ["Yes", "No"]}
    validates :family_friendly, inclusion: {in: ["Yes", "No"]}
    validates :trailhead_coordinates, length: {maximum: 39}

    def number_of_reviews
        self.reviews.count
    end

    def average_rating
        self.reviews.average(:trail_rating).round(1)
    end

end
