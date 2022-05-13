require 'rails_helper'

RSpec.describe "Messages", type: :request do

  let(:user) { main_user }
  let(:message_params) {{title: "test", content: "test"}}

# method index
  describe 'get /api/teams/:team_id/messages/' do
    context "未ログイン" do
      example 'HTTPステータス:401' do
        get "/api/teams/#{team_id(user)}/messages/"
        expect(response).to have_http_status(401)
      end
    end

    context "ログイン済み" do
      before do
        get "/api/teams/#{team_id(user)}/messages/", headers: auth_tokens(user)
      end
      example 'HTTPステータス:200' do
        expect(response).to have_http_status(200)
      end
    end
  end

# method:show
  describe 'get /api/teams/:team_id/messages/:id' do
    context "未ログイン" do
      example 'HTTPステータス:401' do
        get "/api/teams/#{team_id(user)}/messages/#{user_id(user)}/"
        expect(response).to have_http_status(401)
      end
    end

    context "ログイン済み" do
      before do
        get "/api/teams/#{team_id(user)}/messages/#{user_id(user)}/", headers: auth_tokens(user)
      end
      example 'HTTPステータス:200' do
        expect(response).to have_http_status(200)
      end
    end
  end

  # method: create
  describe 'post /api/teams/:team_id/messages/' do
    context "未ログイン" do
      example 'HTTPステータス:401' do
        post "/api/teams/#{team_id(user)}/messages/", params: message_params
        expect(response).to have_http_status(401)
      end
    end

    context "ログイン済み" do
      before do
        post "/api/teams/#{team_id(user)}/messages/", headers: auth_tokens(user), params: message_params
      end
      example 'HTTPステータス:200' do
        expect(response).to have_http_status(200)
      end
    end
  end
end
