module ObjectCreators

  def auth_tokens(user)
    post '/auth/sign_in/', params: user
 {"uid": response.header['uid'], "client": response.header['client'], "access-token": response.header['access-token'] }
  end

  def team_id(user)
    team = Team.find_by(name: user[:name])
    team_id = team.id
    return team_id
  end

  def user_id(user)
    user = User.find_by(name: user[:name])
    user_id = user.id
    return user_id
  end
  
  def main_user
    @user = { id: 1, name: 'Main', email: 'a@gmail.com', password: 'aaaaaa' }
    return @user
  end
end
