class User < ApplicationRecord
  include Rails.application.routes.url_helpers

  has_one_attached :avatar
  devise :database_authenticatable,
         :registerable,
         :recoverable,
         :rememberable,
         :validatable

  include DeviseTokenAuth::Concerns::User
  has_many :messages, dependent: :destroy
  has_many :events, dependent: :destroy
  has_many :user_team_relationships, dependent: :destroy
  has_many :teams, through: :user_team_relationships

  def current_user_avatar
    user.avatar.attached? ? url_for(user.avatar) : nil
  end

  def profile_avatar
    avatar.attached? ? url_for(avatar) : nil
  end

  def default_avatar
    unless avatar.attached?
      image.attach(
        io: File.open('/public/images/default.png'),
        filename: 'default.png',
        content_type: 'image/png'
      )
    end
  end

  def join_team(team)
    teams << team
  end

  def leave_team(team)
    user_team_relationships.find_by(team_id: team.id).destroy
  end
end
