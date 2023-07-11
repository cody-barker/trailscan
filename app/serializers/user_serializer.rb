class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :state, :profile_image

  has_many :reviews
end
