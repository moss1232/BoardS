class Team < ApplicationRecord
  include Rails.application.routes.url_helpers
  
  has_one_attached :avatar

  has_many :user_team_relationships
  has_many :users, through: :user_team_relationships
  has_many :messages
  has_many :events

  validates :name, presence: true, uniqueness: true
  validates :password, presence: true

  def team_avatar_url
    avatar.attached? ? url_for(avatar) : nil
  end

  def user_avatar_url
    avatar.attached? ? url_for(avatar) : nil
  end
end