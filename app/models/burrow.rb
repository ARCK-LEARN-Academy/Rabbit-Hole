class Burrow < ApplicationRecord
    has_many :user_burrows
    has_many :users, through: :user_burrows
    has_many :posts
    validates :title, :about, :image, presence: true
    validates :title, :about, :image, uniqueness: true
end
