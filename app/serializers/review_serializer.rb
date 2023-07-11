class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :trail_id, :trail_rating, :condition, :content

  belongs_to :user
  belongs_to :trail
end
