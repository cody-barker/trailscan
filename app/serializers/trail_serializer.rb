class TrailSerializer < ActiveModel::Serializer
  attributes :id, :name, :difficulty, :length, :description, :dogs_allowed, :family_friendly, :trailhead_coordinates, :photo, :number_of_reviews, :average_rating

  has_many :reviews
  has_many :users
end
