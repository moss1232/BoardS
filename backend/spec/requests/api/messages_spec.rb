require 'rails_helper'

RSpec.describe "Messages", type: :request do

  let(:user) { main_user }
  let(:message_params) {{title: "test", content: "test"}}

  describe 'check before_action :authenticate_user!' do
    context "OK:ログイン済みユーザー" do
        it 'HTTPステータス:200' do
        get "/api/teams/#{team_id(user)}/messages/", headers: auth_tokens(user)
        expect(response).to have_http_status(200)
      end
    end
    context "NG:未ログインユーザー" do
      it 'HTTPステータス:401' do
        get "/api/teams/#{team_id(user)}/messages/"
        expect(response).to have_http_status(401)
      end
    end
  end

  describe 'index' do
    example 'index' do
        get "/api/teams/#{team_id(user)}/messages/", headers: auth_tokens(user)
        expect(response).to have_http_status(200)
    end
  end

  describe 'show' do
    example 'HTTPステータス:200' do
        get "/api/teams/#{team_id(user)}/messages/#{user_id(user)}/", headers: auth_tokens(user)
        expect(response).to have_http_status(200)
    end
  end

  describe 'create' do
    example 'HTTPステータス:200' do
      post "/api/teams/#{team_id(user)}/messages/", headers: auth_tokens(user), params: message_params
      expect(response).to have_http_status(200)
    end
  end
end
