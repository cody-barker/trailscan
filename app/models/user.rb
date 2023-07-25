class User < ApplicationRecord
    has_secure_password
    has_many :reviews
    has_many :trails, through: :reviews
    validates :username, presence: true, length: {minimum: 2}
    validates :username, uniqueness: true
    validates :username, format: {without: /\s/, message: "must contain no spaces"}
    validates :password, length: {minimum: 4, maximum: 16}

     def uniq_user_trail_names
        trails = self.trails.map do |trail|
            trail.name
        end
        return trails.uniq
    end
end
