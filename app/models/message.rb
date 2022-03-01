class Message < ApplicationRecord
  include Rails.application.routes.url_helpers

  belongs_to :user
  belongs_to :team

  validates :user_id, presence: true
  validates :content, presence: true

  def message_user_avatar
    # user.avatar.attached? ? url_for(avatar) : nil
    user.avatar.attached? ? url_for(user.avatar) : nil
  end

end
