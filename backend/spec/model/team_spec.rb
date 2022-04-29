require 'rails_helper'

RSpec.describe Team, type: :model do
  let(:team) { FactoryBot.build(:team) }
  
  describe 'テストデータの検証' do
  it '有効です' do
    expect(team).to be_valid
  end
end
    
  describe 'presenceの検証' do
    it 'NG：nameが未記入' do
      team.name = nil
      expect(team).to be_invalid
    end
    it 'NG：passwordが未記入' do
      team.password = nil
      expect(team).to be_invalid
    end
  end

  describe 'uniqunessの検証' do
    it 'NG：同じ名前が存在' do
      FactoryBot.create(:team)
      team.valid?
      expect(team.errors[:name]).to include("has already been taken")
    end
  end
end

