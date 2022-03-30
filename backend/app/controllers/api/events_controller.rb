class Api::EventsController < ApplicationController
  before_action :authenticate_api_user!

  def index
    current_team = Team.find_by(id: params[:team_id])
    render json: current_team.events.all
  end

  def show
    teams = current_api_user.teams.all
    current_team = teams.find_by(id: params[:id])
    render json: current_team.events.all
  end

  def create
    event = current_api_user.events.new(event_params)
    if event.save
      render json: event
    else
      render json: event.errors, status: 422
    end
  end

  def update
    event = current_api_user.events.find_by(id: params[:id])
    if event.update(event_params)
      render json: event
    else
      render json: event.errors, status: 422
    end
  end

  def destroy
    event = current_api_user.events.find_by(id: params[:id])
    event.destroy!
    render json: event
  end

  private

  def event_params
    params
      .require(:event)
      .permit(:name, :team_id, :start, :end, :timed, :description, :color)
  end
end
