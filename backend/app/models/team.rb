class Team < ApplicationRecord
  include Rails.application.routes.url_helpers

  has_one_attached :avatar

  has_many :user_team_relationships, dependent: :destroy
  has_many :users, through: :user_team_relationships
  has_many :messages, dependent: :destroy
  has_many :events, dependent: :destroy

  validates :name, presence: true, uniqueness: true
  validates :password, presence: true

  def team_avatar_url
    avatar.attached? ? url_for(avatar) : nil
  end

  def set_defaul_avatar
    avatar.attach(
      io: File.open('public/images/default.png'),
      filename: 'default.png',
      content_type: 'image/png',
      identify: false
    )
  end
end
