module ObjectCreators
  def sign_in(user)
    post "/auth/sign_in/",
      params: user
    response.headers.slice('client', 'access-token', 'uid')
    p(response.headers)
  end

  def current_team_id
    @user = User.find_by(name: "Main" )
    team = @user.teams.first
    return team.id
  end

  def main_user
    @user =  { id: 1, name: "Main", email: "a@gmail.com", password: "aaaaaa" }
    return @user
  end

  def params_for_sign_in
    params = { name: "Main", email: "a@gmail.com", password: "aaaaaa" }
    return params
  end
end