class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :city, :state, :profile_image, :uniq_user_trail_names

  has_many :reviews
  has_many :trails
end
