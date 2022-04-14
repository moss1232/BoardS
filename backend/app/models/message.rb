class Message < ApplicationRecord
  include Rails.application.routes.url_helpers

  has_many_attached :files

  # do |attachable|
  #   attachable.variant :thumb, resize_to_limit: [50, 50]
  # endU

  belongs_to :user
  belongs_to :team

  validates :user_id, presence: true
  validates :content, presence: true

  def message_user_avatar
    user.avatar.attached? ? url_for(user.avatar) : nil
  end

  def message_files_url
    url_for(files[0].variant(resize_to_limit: [200, 200])) if files.attached?
  end
end
