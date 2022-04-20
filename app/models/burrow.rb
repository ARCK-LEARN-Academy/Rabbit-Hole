class Burrow < ApplicationRecord
    has_many :user_burrows
    has_many :users, through: :user_burrows
    has_many :posts
end
