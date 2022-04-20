class CreateBurrows < ActiveRecord::Migration[7.0]
  def change
    create_table :burrows do |t|
      t.string :title
      t.text :about
      t.text :image

      t.timestamps
    end
  end
end
