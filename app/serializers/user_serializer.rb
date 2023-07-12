class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :city, :state, :profile_image

  has_many :reviews
end
