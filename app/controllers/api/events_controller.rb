class Api::EventsController < ApplicationController
    before_action :authenticate_user!
  def index
    render json: Team.find(1).events.all
  end

  def show
    teams = current_user.teams.all
    current_team = teams.find_by(id: params[:id])
    render json: current_team.events.all
  end

  def create
    # @user = current_user
    event = current_user.events.new(event_params)
    if event.save
      render json: event
    else
      render json: event.errors, status: 422
    end
  end

  def update
    event = current_user.events.find_by(id: params[:id])
    if event.update(event_params)
      render json: event
    else
      render json: event.errors, status: 422
    end
  end

  def destroy
    # 指定したidのイベントデータを削除する
    event = current_user.events.find_by(id: params[:id])
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
