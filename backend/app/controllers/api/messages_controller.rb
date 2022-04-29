module Api
  class MessagesController < ApplicationController
    before_action :authenticate_user!

    def index
      render json: current_team.messages.all, methods: [:user_avatar]
    end

    def show
      message = Message.find_by(id: params[:id])
      render json: message,
             methods: %i[user_avatar attached_file]
    end

    def create
      message = current_user.messages.new(message_params)
      if message.save
        render json: message, methods: [:user_avatar]
      else
        render json: message.errors, status: :unprocessable_entity
      end
    end

    private

    def message_params
      params.permit(:title, :content, :team_id, :files)
    end
  end
end
