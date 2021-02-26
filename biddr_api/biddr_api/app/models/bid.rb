class Bid < ApplicationRecord
  belongs_to :auction

  # ASSOCIATION WITH USER MODEL
  belongs_to :user

  validates :body, presence: {message: " should be present."}
end
