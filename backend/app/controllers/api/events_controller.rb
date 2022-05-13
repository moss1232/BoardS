module Api
  class EventsController < ApplicationController
    before_action :authenticate_user!

    def index
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
      event = current_team.events.find_by(id: params[:id])
      if event.update(event_params)
        render json: event
      else
        render json: event.errors, status: :unprocessable_entity
      end
    end

    def destroy
      event = current_team.events.find_by(id: params[:id])
      event.destroy
      render json: event
    end

    private

    def event_params
      params.permit(
        :name,
        :team_id,
        :start,
        :end,
        :timed,
        :description,
        :color,
        :id
      )
    end
  end
end
