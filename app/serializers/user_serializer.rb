class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :city, :state, :profile_image, :num_of_trails
  
  has_many :reviews
  has_many :trails
end
