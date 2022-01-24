class User < ApplicationRecord
  has_many :messagesend

  validates :name, presence: true
  validates :name, length: {maximum: 30}
end