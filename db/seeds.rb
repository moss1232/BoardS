User.create!(
  name: 'a',
  email: 'a@me.com',
  password: 'aaaaaa',
  password_confirmation: 'aaaaaa'
)
User.create!(
  name: 'b',
  email: 'b@me.com',
  password: 'bbbbbb',
  password_confirmation: 'bbbbbb'
)
User.create!(
  name: 'c',
  email: 'c@me.com',
  password: 'cccccc',
  password_confirmation: 'cccccc'
)

Team.create(name: 'team1', password: 'aaaaaa', user_ids: [1, 2])
Team.create(name: 'team2', password: 'bbbbbb', user_ids: [1, 2])

puts('teamの作成が完了しました')

Message.create!(
  title: '予定1',
  content: 'content1',
  user_id: User.first.id,
  team_id: Team.first.id
)
Message.create!(
  title: '予定2',
  content: 'content1',
  user_id: User.first.id,
  team_id: Team.first.id
)
Message.create!(
  title: '予定3',
  content: 'content1',
  user_id: User.second.id,
  team_id: Team.first.id
)
Message.create!(
  title: '予定4',
  content: 'content1',
  user_id: User.second.id,
  team_id: Team.second.id
)
Message.create!(
  title: '予定5',
  content: 'content1',
  user_id: User.second.id,
  team_id: Team.second.id
)

puts 'messageの作成が完了しました'

Event.create!(
  name: '予定1',
  start: '2021-07-14 10:00:00',
  end: '2021-07-14 11:00:00',
  user_id: User.first.id,
  team_id: Team.first.id
)
Event.create!(
  name: '予定2',
  start: '2021-07-14 10:00:00',
  end: '2021-07-14 11:00:00',
  user_id: User.first.id,
  team_id: Team.first.id
)
Event.create!(
  name: '予定3',
  start: '2021-07-14 10:00:00',
  end: '2021-07-14 11:00:00',
  user_id: User.first.id,
  team_id: Team.first.id
)
Event.create!(
  name: '予定4',
  start: '2021-07-14 10:00:00',
  end: '2021-07-14 11:00:00',
  user_id: User.first.id,
  team_id: Team.second.id
)

puts('eventの作成が完了しました')

team = Team.find(2)
team.avatar.attach(
  io: File.open('public/images/universe.png'),
  filename: 'universe.png',
  content_type: 'image/png',
  identify: false
)

user = User.find(2)
user.avatar.attach(
  io: File.open('public/images/doctor.png'),
  filename: 'doctor.png',
  content_type: 'image/png',
  identify: false
)

message = Message.find(1)
message.files.attach(
  io: File.open('public/images/doctor.png'),
  filename: 'doctor.png',
  content_type: 'image/png',
  identify: false
)

