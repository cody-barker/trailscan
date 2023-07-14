class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :trail_id, :trail_rating, :date, :condition, :content, :username

  belongs_to :trail
  belongs_to :user
end
