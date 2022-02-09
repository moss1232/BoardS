class MessagesController < ApplicationController
  # before_action :authenticate_user!, only: ["index"]
  def index
    render json: Message.all
  end

  def show
    render json: Message.find(params[:id])
  end

  def create
    message = Message.new(message_params)
    if message.save
      render json: message
    else
      render json: message.errors, status: 422
    end
  end

  def destroy
    # 指定したidのイベントデータを削除する
    message = Message.find(params[:id])
    message.destroy!
    render json: message
  end

      private

          def message_params
          params.require(:message).permit(:id, :title, :content, :created_at, :updated_at)
        end
end
