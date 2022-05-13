class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken

    def current_team
      Team.find_by(id: params[:team_id])
    end
end
