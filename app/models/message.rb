class Message < ApplicationRecord
  include Rails.application.routes.url_helpers

  has_many_attached :files

  belongs_to :user
  belongs_to :team

  validates :user_id, presence: true
  validates :content, presence: true

  def message_user_avatar
    user.avatar.attached? ? url_for(user.avatar) : nil
  end
  
  def message_files_url
    files.attached? ? url_for(message.files) : nil
  end
end
