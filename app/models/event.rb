class Event < ApplicationRecord
  # belongs_to :user
  # belongs_to :team

  validates :name, presence: true, length: { maximum: 100 }
  validates :start, presence: true
  validates :end, presence: true
end
