class Bid < ApplicationRecord
  belongs_to :auction

  # ASSOCIATION WITH USER MODEL
  belongs_to :user, optional: true

  validates :body, presence: {message: " should be present."}
end
