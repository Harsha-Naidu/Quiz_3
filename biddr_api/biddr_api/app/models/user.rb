class User < ApplicationRecord
    has_many :auctions, dependent: :nullify
    has_many :bids, dependent: :nullify

    has_secure_password

    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :email, uniqueness: true

    def full_name
        "#{first_name} #{last_name}"
    end
end
