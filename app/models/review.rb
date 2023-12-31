class Review < ApplicationRecord
    belongs_to :trail
    belongs_to :user
    validates :date, presence: :true
    validates :trail_rating, presence: :true
    validates :trail_rating, numericality: {
        only_integer: true,
        greater_than: 0,
        less_than_or_equal_to: 5}
    validates :condition, length: {maximum: 300}
    validates :content, length: {maximum: 2000}
    validate :date_is_today_or_earlier

    def date_is_today_or_earlier
        if date.present? && date > Date.today
            errors.add(:date, "cannot be in the future")
        end
    end

    def username
        self.user.username
    end

    def trailname
        self.trail.name
    end

    def formatted_date
        self.date.strftime("%B %d, %Y")
    end

    def profile_image
        self.user.profile_image
    end

    def trail_photo
        self.trail.photo
    end

end
