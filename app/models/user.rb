class User < ApplicationRecord
            # Include default devise modules.
            devise :database_authenticatable, :registerable,
                    :recoverable, :rememberable, :validatable
            include DeviseTokenAuth::Concerns::User
  has_many :messagesend

  validates :name, presence: true
  validates :name, length: {maximum: 30}
end