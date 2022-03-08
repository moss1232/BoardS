class Message < ApplicationRecord
  include Rails.application.routes.url_helpers

  has_many_attached :files 
  # do |attachable|
  #   attachable.variant :thumb, resize_to_limit: [50, 50]
  # end

  belongs_to :user
  belongs_to :team

  validates :user_id, presence: true
  validates :content, presence: true

  def message_user_avatar
    user.avatar.attached? ? url_for(user.avatar) : nil
  end

  def message_files_url
    # files.attached? ? url_for(thumb) : nil
    if files.attached? then
      # files[0].variant(resize:"100x100^")
      url_for(files[0].variant(resize_to_limit: [500, 500]))
      else
        nil
    # if files.attached? then
      # files[0].variant(resize:'50x50')
      # url_for(files)
  # end
      end
  end
end
