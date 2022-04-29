class Post < ApplicationRecord
  belongs_to :user
  belongs_to :burrow

  validates :title, :content, presence: true
  validates :title, uniqueness: true
end
