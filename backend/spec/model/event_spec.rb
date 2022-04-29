require 'rails_helper'

RSpec.describe Event, type: :model do
  let(:event) {build(:event)}
  describe 'presenceの検証' do
    it 'NG：nameが未記入' do
      event.title = ''
      expect()
    end
  end
end

