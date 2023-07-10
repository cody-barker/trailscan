class User < ApplicationRecord
    has_many :reviews
    has_many :trails, through: :reviews
end
