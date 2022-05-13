module Api
  class EventsController < ApplicationController
    before_action :authenticate_user!

    def index
      current_team = Team.find_by(id: params[:team_id])
      render json: current_team.events.all
    end

    def show
      teams = current_user.teams.all
      current_team = teams.find_by(id: params[:id])
      render json: current_team.events.all
    end

    def create
      event = current_user.events.new(event_params)
      if event.save
        render json: event
      else
        render json: event.errors, status: :unprocessable_entity
      end
    end

    def update
      current_team = Team.find_by(id: params[:team_id])
      event = current_team.events.find_by(id: params[:id])
      if event.update(event_params)
        render json: event
      else
        render json: event.errors, status: :unprocessable_entity
      end
    end

    def destroy
      current_team = Team.find_by(id: params[:team_id])
      event = current_team.events.find_by(id: params[:id])
      render json: event
    end

    private

    def event_params
      params.permit(
        :name,
        :team_id,
        :start,
        :timed,
        :description,
        :color,
        :id
      )
    end
  end
end
