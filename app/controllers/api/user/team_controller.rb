class Api::User::TeamController < ApplicationController
  def index
    render json: current_user.teams.all
  end
end