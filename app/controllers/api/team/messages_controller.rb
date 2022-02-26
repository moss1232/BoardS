class Api::Team::MessagesController < ApplicationController
  # before_action :authenticate_user!


  def show
    teams = current_user.teams.all
    current_team = teams.find_by(id: params[:id])
    render json: current_team.messages.all, methods: [:user_avatar_url]
    # current_team.users.all, methods: [:team_avatar_url]
  end

  def create
    message = current_user.messages.new(message_params)
    if message.save
      render json: message
    else
      render json: message.errors, status: 422
    end
  end

  def destroy
    message = current_user.messages.find_by(id: params[:id])
    message.destroy!
    render json: message
  end

  private

  # def message_params
  #   params.require(:message).permit(:title, :content)
  # end


end
