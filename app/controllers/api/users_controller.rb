class Api::UsersController < ApplicationController
  def index
    render json: current_user.teams.all, methods: [:user_avatar_url]
  end
end
