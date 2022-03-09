class Api::TeamsController < ApplicationController  
  before_action :authenticate_user!

  def index
    render json: current_user.teams.all, methods: [:team_avatar_url]
  end
end
