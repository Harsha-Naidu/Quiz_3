class Auction < ApplicationRecord

     before_save :titelize_title

     # ASSOCIATION WITH USER MODEL
     belongs_to :user,optional: true

     # ASSOCIATION WITH BID MODEL
     has_many :bids, dependent: :destroy

     validates :title, presence: true, uniqueness: true
     validates :description, presence: true, length: { minimum: 10 }
     validates :ends_at, presence: {message: " must be present."}
     validates :reserve_price, presence: true


     private
          def titelize_title
               self.title.titelize!
          end
end
