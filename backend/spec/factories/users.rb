FactoryBot.define do
  factory :user do
    name { 'spec_a' }
    email { 'spec_a@example.com' }
    password { 'password' }
  end
end
