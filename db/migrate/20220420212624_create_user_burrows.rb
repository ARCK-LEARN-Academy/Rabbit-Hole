class CreateUserBurrows < ActiveRecord::Migration[7.0]
  def change
    create_table :user_burrows do |t|
      t.references :user, null: false, foreign_key: true
      t.references :burrow, null: false, foreign_key: true

      t.timestamps
    end
  end
end
