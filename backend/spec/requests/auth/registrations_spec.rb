require 'rails_helper'

RSpec.describe "Auth::Registrations", type: :request do
  let(:params) { params_for_sign_in }
  it "Return status 200" do
    p(params)
    post "/auth/sign_in/",
      params: params
    expect(response).to have_http_status(200)
  end
end