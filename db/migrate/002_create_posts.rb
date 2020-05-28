class CreatePosts < ActiveRecord::Migration[6.0]
  def self.up
    create_table :posts do |t|
      t.string :title
      t.string :sub_title
      t.text :body
      t.text :imgage
      t.timestamps null: false
    end
  end

  def self.down
    drop_table :posts
  end
end
