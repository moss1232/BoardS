class User < ApplicationRecord
    include Rails.application.routes.url_helpers

  # Include default devise modules.
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

  validates :name, presence: true
  validates :name, length: { maximum: 30 }

  def current_user_avatar
    user.avatar.attached? ? url_for(user.avatar) : nil
  end

  def profile_avatar
    self.avatar.attached? ? url_for(self.avatar) : nil
  end

def default_avatar
  if !self.avatar.attached?
        self.image.attach(io: File.open('/public/images/default.png'), filename: 'default.png', content_type: 'image/png')
    end
end
end
