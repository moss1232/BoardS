FactoryBot.define do
  factory :message do
    title {"title"}
    content {"content"}
    association :user
    association :team
    end
end