module Api
  class TeamsController < ApplicationController
    before_action :authenticate_user!

    def index
      render json: current_user.teams.all, methods: [:team_avatar_url]
    end

    def create
      team = current_user.teams.new(team_params)
      team.set_defaul_avatar unless params[:avatar]

      if team.save
        render json: team, methods: [:team_avatar_url]
      else
        render json: team.errors, status: :unprocessable_entity
      end
    end

    def search
      team = Team.find_by(name: params[:name])
      render json: team, methods: [:team_avatar_url]
    end

    def join
      team = Team.find_by(name: params[:name])
      if current_user.teams.exists?(id: team.id)
        render json: team.errors, status: :unprocessable_entity
      else
        current_user.join_team(team)
        render json: team, methods: [:team_avatar_url]
      end
    end

    def leave
      team = current_user.teams.find_by(name: params[:name])
      current_user.leave_team(team)
      render json: team
    end

    private

    def team_params
      params.permit(:name, :avatar, :password).merge(user_ids: [current_user.id])
    end
  end
end
