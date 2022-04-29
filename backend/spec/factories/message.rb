FactoryBot.define do
  factory :message do
    title {"title"}
    content {"content"}
    association :user
    association :team
    end
  # after(:build) do |message|
  #   message.files.attach(
  #     io: File.open('public/images/doctor.png'),
  #     filename: 'doctor.png',
  #     content_type: 'image/png',
  #     identify: false
  #   )
  # end
end