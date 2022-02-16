class Team < ApplicationRecord
  
  has_one_attached :image

  has_many :user_team_relationships
  has_many :users, through: :user_team_relationships
  has_many :messages
  # has_many :events

  validates :name, presence: true, uniqueness: true
  validates :password, presence: true
end