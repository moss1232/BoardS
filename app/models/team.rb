class Team < ApplicationRecord
  has_many :user_team_relationships
  has_many :users, through: :user_team_relationships
  has_many :message_team_relationships
  has_many :messages, through: :message_team_relationships

  validates :name, presence: true, uniqueness: true
  validates :password, presence: true
end