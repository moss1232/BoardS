class MessagesController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: current_user.messages.all
  end

  def show
    render json: current_user.messages.find_by(id: params[:id])
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

  def message_params
    params.require(:message).permit(:title, :content)
  end
end
