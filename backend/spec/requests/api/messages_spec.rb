require 'rails_helper'

RSpec.describe "Api::Messages", type: :request do
  describe "GET /api/teams/:team_id/messages" do
    let!(:user_main){FactoryBot.create(:user, name: "main", email: "main@example.com")}
    it "works! (now write some real specs)" do
      get api_messages_index_path
      expect(response).to have_http_status(200)
    end
  end
end
