require 'rails_helper'

RSpec.describe 'Registrations', type: :request do
  let(:user) { main_user }
  
  it 'Return status 200' do
    p(user[:id])
    # post '/auth/sign_in/', params: {email: user.email, password: user.password}
    post '/auth/sign_in/', params: user
    expect(response).to have_http_status(200)
  end
end
