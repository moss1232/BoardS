class UsersController < ApplicationController
  # チームに参加する
  def follow(current_user)
    team << current_user
  end

  # チームを退会する
  def unfollow(current_team)
    user_team_relationships.find_by(team_id: current_team.id).destroy
  end
end
