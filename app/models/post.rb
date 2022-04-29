class Post < ApplicationRecord
  belongs_to :user
  belongs_to :burrow
  validates :title, :content, :burrow_id, presence: true
  validates :title, :content, uniqueness: true
end
