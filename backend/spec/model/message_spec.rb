require 'rails_helper'

RSpec.describe Message, type: :model do
  let(:message) { FactoryBot.build(:message) }
  
  describe 'テストデータの検証' do
  it '有効です' do
    expect(message).to be_valid
  end
end
    
  describe 'presenceの検証' do
    it 'NG：titleが未記入' do
      message.title = nil
      expect(message).to be_invalid
    end
    it 'NG：contentが未記入' do
      message.content = nil
      expect(message).to be_invalid
    end
  end
end

