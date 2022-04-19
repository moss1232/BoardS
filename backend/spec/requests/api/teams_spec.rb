require 'rails_helper'

RSpec.describe "teams", type: :request do

  let(:user) { main_user }
  let(:team_params) {{name: "Main", password: "Main"}}

  describe 'index' do
    context "未ログイン" do
      example 'HTTPステータス:401' do
        get "/api/teams/"
        expect(response).to have_http_status(401)
      end
    end

    context "ログイン済み" do
      before do
        get "/api/teams/", headers: auth_tokens(user)
      end
      example 'HTTPステータス:200' do
        expect(response).to have_http_status(200)
      end
    end
  end

# method:show
  describe 'create' do
    context "未ログイン" do
      example 'HTTPステータス:401' do
        post "/api/teams/", params: team_params
        expect(response).to have_http_status(401)
      end
    end

    # context "ログイン済み" do
    #   before do
    #     post "/api/teams/", headers: auth_tokens(user), params: team_params
    #   end
    #   example '作成済みのチーム' do
    #     expect(response).to have_http_status(404)
    #   end
    # end
  end

  describe 'search' do
    context "未ログイン" do
      example 'HTTPステータス:401' do
        get "/api/teams/search", params: team_params
        expect(response).to have_http_status(401)
      end
    end
    context "ログイン済み" do
      example 'HTTPステータス:401' do
        get "/api/teams/search", headers: auth_tokens(user), params: team_params
        expect(response).to have_http_status(200)
      end
    end

  end

  describe 'join' do
    context "未ログイン" do
      example 'HTTPステータス:401' do
        post "/api/teams/join", params: team_params
        expect(response).to have_http_status(401)
      end
    end

    # context "ログイン済み" do
    #   example '参加済みのユーザー' do
    #   post "/api/teams/join", headers: auth_tokens(user), params: team_params
    #     expect(response).to have_http_status(404)
    #   end
    # end
  end

  describe 'leave' do
    context "未ログイン" do
      example 'HTTPステータス:401' do
        delete "/api/teams/leave", params: team_params
        expect(response).to have_http_status(401)
      end
    end

    context "ログイン済み" do
      example 'HTTPステータス:200' do
      delete "/api/teams/leave", headers: auth_tokens(user), params: team_params
        expect(response).to have_http_status(200)
      end
    end
  end
end
