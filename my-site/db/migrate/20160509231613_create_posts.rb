class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.string :content
      t.date :date
      t.string :tagline
      t.string :picture

      t.timestamps null: false
    end
  end
end
