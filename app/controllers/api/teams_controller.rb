class Api::TeamsController < ApplicationController  
  before_action :authenticate_user!

  def index
    render json: current_user.teams.all, methods: [:team_avatar_url]
  end

  
  def destroy
    team = current_user.teams.find_by(name: params[:name])
    team.destroy!
    render json: team
  end
  
  def create
    team = current_user.teams.new(team_params)
    if team.save
      render json: team
    else
      render json: team.errors, status: 422
    end
  end

  def search
  team = Team.find_by(name: params[:name])
  render json: team, methods: [:team_avatar_url]
  end

  def join
  team = Team.find_by(name: params[:name])
  current_user.join_team(team)
  render json: team, methods: [:team_avatar_url]
  end

    private

  def team_params
    params.permit(:name, :avatar, :password).merge(user_ids: [current_user.id])
  end
end
