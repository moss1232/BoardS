class Api::TeamsController < ApplicationController
  def index
    render json: current_user.teams.all, methods: [:team_avatar_url]
  end
end