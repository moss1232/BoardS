module Api
  class MessagesController < ApplicationController
    before_action :authenticate_user!

    def index
      current_team = Team.find_by(id: params[:team_id])
      render json: current_team.messages.all, methods: [:message_user_avatar]
    end

    def show
      current_message = Message.find_by(id: params[:id])
      render json: current_message,
             methods: %i[message_user_avatar message_files_url]
    end

    def create
      message = current_user.messages.new(message_params)
      if message.save
        render json: message, methods: [:message_user_avatar]
      # else
      #   render json: message.errors, status: :unprocessable_entity
      end
    end

    private

    def message_params
      params.permit(:title, :content, :team_id, :files)
    end
  end
end
