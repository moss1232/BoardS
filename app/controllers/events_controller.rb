class EventsController < ApplicationController
  def index
    render json: current_user.events.all
  end

  def show
    render json: current_user.events.find_by(id: params[:id])
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
      .permit(:name, :start, :end, :timed, :description, :color)
  end
end
