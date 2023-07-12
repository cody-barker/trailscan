class RemoveAverageRatingAndNumberOfReviewsFromTrailsTable < ActiveRecord::Migration[6.1]
  def change
    remove_column :trails, :average_rating
    remove_column :trails, :number_of_reviews
  end
end
