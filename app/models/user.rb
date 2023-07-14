class User < ApplicationRecord
    has_secure_password
    has_many :reviews
    has_many :trails, through: :reviews
    validates :username, presence: true, length: {minimum: 2}
    validates :username, uniqueness: true
    validates :password, length: {minimum: 4, maximum: 16}
end
