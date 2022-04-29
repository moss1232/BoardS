require 'rails_helper'

RSpec.describe "events", type: :request do

  let(:user) { main_user }
  let(:event_params) {{id: 1, name: "test", start: "Fri, 27 May 2022 10:00:00.000000000 JST +09:00", end: "Fri, 27 May 2022 12:00:00.000000000 JST +09:00"}}

  describe 'check before_action :authenticate_user!' do
    context "OK:ログイン済みユーザー" do
        it 'HTTPステータス:200' do
        get "/api/teams/#{team_id(user)}/events/", headers: auth_tokens(user)
        expect(response).to have_http_status(200)
      end
    end
    context "NG:未ログインユーザー" do
      it 'HTTPステータス:401' do
        get "/api/teams/#{team_id(user)}/events/"
        expect(response).to have_http_status(401)
      end
    end
  end


  describe 'index' do
    example 'HTTPステータス:200' do
        get "/api/teams/#{team_id(user)}/events/", headers: auth_tokens(user)
        expect(response).to have_http_status(200)
      end
  end

  describe 'update' do
      example 'HTTPステータス:200' do
      put "/api/teams/#{team_id(user)}/events/#{event_params[:id]}", headers: auth_tokens(user), params: event_params
        expect(response).to have_http_status(200)
      end
  end

  describe 'delete' do
      example 'HTTPステータス:200' do
      delete "/api/teams/#{team_id(user)}/events/#{event_params[:id]}", headers: auth_tokens(user)
        expect(response).to have_http_status(200)
      end
  end
end
