class UserBurrow < ApplicationRecord
  belongs_to :user
  belongs_to :burrow
end
