FactoryBot.define do
  factory :task do
    name {"test"}
    description {"Rspec&Factorybotを準備"}
    user
  end
end