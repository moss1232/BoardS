require 'rails_helper'

RSpec.describe "Auth::Registrations", type: :request do
  describe "Post /auth/registrations/sign_in" do
    it "works! " do
      post "/auth/sign_in/",
        params: { name: user[:name], email: user[:email], password: user[:password] },
        as: :json
      expect(response).to have_http_status(200)
    end
  end
end