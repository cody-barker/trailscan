class User < ApplicationRecord
    has_secure_password
    has_many :reviews
    has_many :trails, through: :reviews
    validates :username, presence: true, length: {minimum: 2}
    validates :username, uniqueness: true
    validates :username, format: {without: /\s/, message: "must contain no spaces"}
    validates :password, length: {minimum: 4, maximum: 16}

    def num_of_trails
        self.trails.count
    end

end
