class TrailSerializer < ActiveModel::Serializer
  attributes :id, :name, :average_rating, :number_of_reviews, :difficulty, :length, :description, :dogs_allowed, :family_friendly, :trailhead_coordinates

  has_many :reviews
end
