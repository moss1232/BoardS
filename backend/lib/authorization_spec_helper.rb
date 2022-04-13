module AuthorizationSpecHelper
  def sign_in(user)
    post "/auth/sign_in/",
      params: { name: user[:name], email: user[:email], password: user[:password] },
      as: :json

    response.headers.slice('client', 'access-token', 'uid')
  end
end