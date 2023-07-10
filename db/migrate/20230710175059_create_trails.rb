class CreateTrails < ActiveRecord::Migration[6.1]
  def change
    create_table :trails do |t|
      t.string :name
      t.float :average_rating
      t.integer :number_of_reviews
      t.string :difficulty
      t.float :length
      t.string :description
      t.string :dogs_allowed
      t.string :family_friendly
      t.string :trailhead_coordinates

      t.timestamps
    end
  end
end
