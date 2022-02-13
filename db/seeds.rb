user = User.create!(name: 'b', email: 'b@me.com', password: 'bbbbbb', password_confirmation: 'bbbbbb')
Message.create!(title: '予定1', content: 'content1', user: user)
Message.create!(title: '予定2', content: 'content1', user: user)
Message.create!(title: '予定3', content: 'content1', user: user)
Message.create!(title: '予定4', content: 'content1', user: user)

  # puts ”messageの作成が完了しました"  
puts("message,eventの作成が完了しました")

Event.create!(name: '予定1', start: '2021-07-14 10:00:00', end: '2021-07-14 11:00:00', user_id: User.first.id)
Event.create!(name: '予定2', start: '2021-07-14 10:00:00', end: '2021-07-14 11:00:00', user_id: User.first.id)
Event.create!(name: '予定3', start: '2021-07-14 10:00:00', end: '2021-07-14 11:00:00', user_id: User.first.id)
Event.create!(name: '予定4', start: '2021-07-14 10:00:00', end: '2021-07-14 11:00:00', user_id: User.first.id)

puts("eventの作成が完了しました")