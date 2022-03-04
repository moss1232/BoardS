class Api::MessagesController < ApplicationController
  # before_action :authenticate_user!
  def index
    teams = current_user.teams.all
    current_team = teams.find_by(id: params[:team_id])
    render json: current_team.messages.all, methods: [:message_user_avatar]
  end

  def show
    # teams = current_user.teams.all
    current_message = Message.find_by(id: params[:id])
    render json: current_message, methods: [:message_user_avatar]
  end

    def create
        message = current_user.messages.new(message_params)
    if message.save
      render json: message
    else
      render json: message.errors, status: 422
    end
  end

  # def destroy
  #   message = current_user.messages.find_by(id: params[:id])
  #   message.destroy!
  #   render json: message
  # end

  private

  def message_params
    params
      .require(:message)
      .permit(:title, :content, :team_id)
  end


end
