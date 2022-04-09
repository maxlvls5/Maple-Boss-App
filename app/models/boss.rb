class Boss < ApplicationRecord
    has_many :users
    has_many :guides
end
