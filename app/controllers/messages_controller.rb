class MessagesController < ApplicationController
  before_action :authenticate_user!
  # def initialize(message_params)
    # @message = current_user.message.new()
  # end

  def index
      render json: current_user.messages.all
  end

  def show
    render json: Message.find(params[:id])
  end

  def create
    message = current_user.essages.new(message_params)
    if message.save
      render json: message
    else
      render json: message.errors, status: 422
    end
  end

  def destroy
    message = Message.find(params[:id])
    message.destroy!
    render json: message
  end

      private
          def message_params
          params.require(:message).permit(:title, :content)
        end
end
