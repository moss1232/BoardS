require 'rails_helper'

RSpec.describe "teams", type: :request do

  let(:user) { main_user }
  let(:team_params) {{name: "main", password: "main"}}
  # let(:sub_team_params) {{name: "sub", password: "sub"}}

  describe 'check before_action :authenticate_user!' do
    context "OK" do
      context "ログイン済みユーザー" do
        it 'HTTPステータス:200' do
          get "/api/teams/", headers: auth_tokens(user)
          expect(response).to have_http_status(200)
        end
      end
    end
    context "NG" do
    context "未ログインユーザー" do
      it 'HTTPステータス:401' do
        get "/api/teams/"
        expect(response).to have_http_status(401)
      end
      end
    end
    
  end
  
  describe 'index' do
    context "OK" do
      it 'HTTPステータス:200' do
        get "/api/teams/", headers: auth_tokens(user)
        expect(response).to have_http_status(200)
      end
    end
  end
  
  describe 'create' do
    context "OK" do
      it 'HTTPステータス:200' do
        post "/api/teams/", headers: auth_tokens(user), params: team_params
        # post "/api/teams/", headers: auth_tokens(user), params: sub_team_params
        expect(response).to have_http_status(200)
      end
    end

    context "NG" do
      context '作成済みのチーム' do
        it 'HTTPステータス:422' do
          post "/api/teams/", headers: auth_tokens(user), params: team_params
          post "/api/teams/", headers: auth_tokens(user), params: team_params
        expect(response).to have_http_status(422)
      end
      end
      end
  end

  describe 'search' do
    context "OK" do
      it 'HTTPステータス:200' do
        get "/api/teams/search", headers: auth_tokens(user), params: team_params
        expect(response).to have_http_status(200)
      end
    end
    
    context "NG" do
      context '未登録のチーム' do
        it 'HTTPステータス:422' do
          get "/api/teams/search", headers: auth_tokens(user), params: team_params
          # get "/api/teams/search", headers: auth_tokens(user), params: team_params
        expect(response).to have_http_status(422)
      end
      end
      end
  end

  describe 'join' do

    # context "ログイン済み" do
    #   example '参加済みのユーザー' do
    #   post "/api/teams/join", headers: auth_tokens(user), params: team_params
    #     expect(response).to have_http_status(404)
    #   end
    # end
  end

  describe 'leave' do

      it 'HTTPステータス:200' do
      delete "/api/teams/leave", headers: auth_tokens(user), params: team_params
        expect(response).to have_http_status(200)
      end
  end
end
