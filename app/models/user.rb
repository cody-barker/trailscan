class User < ApplicationRecord
    has_secure_password
    has_many :reviews
    has_many :trails, through: :reviews
    validates :name, presence: true, length: {minimum: 2}
    validates :name, uniqueness: true
end