class User < ApplicationRecord
    has_many :bosses
    has_many :guides
    
    has_secure_password

    validates :username, uniqueness: true

end