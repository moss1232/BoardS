FactoryBot.define do
  factory :team do
    name {"team_name"}
    password {"password"}
#     after(:build) do |post|
# mainuser.avatar.attach(
#   io: File.open('public/images/doctor.png'),
#   filename: 'doctor.png',
#   content_type: 'image/png',
#   identify: false
# )
#     end
    end
end