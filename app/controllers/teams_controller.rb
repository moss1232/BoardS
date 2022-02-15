class TeamsController < ApplicationController
  def index
  render json: User.find(1).teams.all
  end
end
