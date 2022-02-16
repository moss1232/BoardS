class Message < ApplicationRecord
  belongs_to :user
  belongs_to :team

  validates :user_id, presence: true
  validates :content, presence: true
end
