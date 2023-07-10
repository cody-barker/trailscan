class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :user_id
      t.integer :trail_id
      t.date :date
      t.integer :trail_rating
      t.string :condition
      t.string :content

      t.timestamps
    end
  end
end
