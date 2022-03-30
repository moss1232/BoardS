class Api::TeamsController < ApplicationController
  before_action :authenticate_api_user!

  def index
    render json: current_api_user.teams.all, methods: [:team_avatar_url]
  end

  def create
    team = current_api_user.teams.new(team_params)
    team.set_defaul_avatar unless params[:avatar]

    if team.save
      render json: team, methods: [:team_avatar_url]
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
    if current_api_user.teams.exists?(id: team.id)
      render json: team.errors, status: 422
    else
      current_api_user.join_team(team)
      render json: team, methods: [:team_avatar_url]
    end
  end

  def leave
    team = current_api_user.teams.find_by(name: params[:name])
    current_api_user.leave_team(team)
    render json: team
  end

  private

  def team_params
    params.permit(:name, :avatar, :password).merge(user_ids: [current_api_user.id])
  end
end
