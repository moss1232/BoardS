class Api::User::MessagesController < ApplicationController

  
  
    def create
        message = current_user.messages.new(message_params)
    if message.save
      render json: message
    else
      render json: message.errors, status: 422
    end
  end
end
