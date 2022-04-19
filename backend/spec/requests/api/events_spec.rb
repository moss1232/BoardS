require 'rails_helper'

RSpec.describe "events", type: :request do

  let(:user) { main_user }
  let(:event_params) {{id: 1, name: "test", start: "Fri, 27 May 2022 10:00:00.000000000 JST +09:00", end: "Fri, 27 May 2022 12:00:00.000000000 JST +09:00"}}

  describe 'index' do
    context "未ログイン" do
      example 'HTTPステータス:401' do
        post "/api/teams/#{team_id(user)}/events/"
        expect(response).to have_http_status(401)
      end
    end

    context "ログイン済み" do
      before do
        get "/api/teams/#{team_id(user)}/events/", headers: auth_tokens(user)
      end
      example 'HTTPステータス:200' do
        expect(response).to have_http_status(200)
      end
    end
  end

# method:show
  describe 'show' do
    context "未ログイン" do
      example 'HTTPステータス:401' do
        get "/api/teams/#{team_id(user)}/events/#{user_id(user)}/"
        expect(response).to have_http_status(401)
      end
    end

    context "ログイン済み" do
      before do
        get "/api/teams/#{team_id(user)}/events/#{user_id(user)}/", headers: auth_tokens(user)
      end
      example 'HTTPステータス:200' do
        expect(response).to have_http_status(200)
      end
    end
  end

  # method: create
  describe 'create' do
    context "未ログイン" do
      example 'HTTPステータス:401' do
        post "/api/teams/#{team_id(user)}/events/", params: event_params
        expect(response).to have_http_status(401)
      end
    end
    # context "ログイン済み" do
    #   example 'HTTPステータス:204' do
    #     post "/api/teams/#{team_id(user)}/events/", headers: auth_tokens(user), params: event_params
    #     expect(response).to have_http_status(204)
    #   end
    # end
  end

  describe 'update' do
    context "未ログイン" do
      example 'HTTPステータス:401' do
        put "/api/teams/#{team_id(user)}/events/#{event_params[:id]}", params: event_params
        expect(response).to have_http_status(401)
      end
    end

    context "ログイン済み" do
      example 'HTTPステータス:200' do
      put "/api/teams/#{team_id(user)}/events/#{event_params[:id]}", headers: auth_tokens(user), params: event_params
        expect(response).to have_http_status(200)
      end
    end
  end

  describe 'delete' do
    context "未ログイン" do
      example 'HTTPステータス:401' do
        delete "/api/teams/#{team_id(user)}/events/#{event_params[:id]}", params: event_params
        expect(response).to have_http_status(401)
      end
    end

    context "ログイン済み" do
      example 'HTTPステータス:200' do
      delete "/api/teams/#{team_id(user)}/events/#{event_params[:id]}", headers: auth_tokens(user)
        expect(response).to have_http_status(200)
      end
    end
  end
end
