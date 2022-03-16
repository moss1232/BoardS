# ユーザーを作成
user = User.create!(
  name: 'Main',
  email: 'a@gmail.com',
  password: 'aaaaaa',
  password_confirmation: 'aaaaaa'
)
user.avatar.attach(
  io: File.open('public/images/doctor.png'),
  filename: 'doctor.png',
  content_type: 'image/png',
  identify: false
)


subuser1 = User.create!(
  name: 'Sub1',
  email: 'b@gmail.com',
  password: 'bbbbbb',
  password_confirmation: 'bbbbbb'
)
subuser1.avatar.attach(
  io: File.open('public/images/man1.png'),
  filename: 'man1.png',
  content_type: 'image/png',
  identify: false
)

subuser2 = User.create!(
  name: 'Sub2',
  email: 'c@gmail.com',
  password: 'cccccc',
  password_confirmation: 'cccccc'
)
subuser2.avatar.attach(
  io: File.open('public/images/woman1.png'),
  filename: 'woman1.png',
  content_type: 'image/png',
  identify: false
)

5.times do |n|
  name  = Faker::Name.unique.name
  email = "example-#{n+1}@gmail.com"
  password = "password"
  user = User.create!(
    name:  name,
    email: email,
    password:              password,
    password_confirmation: password
  )
  user.avatar.attach(
    io: File.open('public/images/default.png'),
    filename: 'default.png',
    content_type: 'image/png',
    identify: false
  )
end

p("ユーザーを作成しました")

Team.create(name: 'Main', password: 'Main', user_ids: [1, 2, 3, 4, 5, 6])
ids = (1..8).to_a

5.times do |n|
  name  = "team-#{n+1}"
  password = "password"
  Team.create!(
    name:  name,
    password: password,
    user_ids: ids.sample(5)
  )
end
team = Team.find(1)
team.avatar.attach(
  io: File.open('public/images/universe.png'),
  filename: 'universe.png',
  content_type: 'image/png',
  identify: false
)
p("チームを作成しました")

30.times do |n|
  Message.create!(
    title: "タイトル-#{n+1}",
    content: "コンテンツ",
    user_id: rand(1..8) ,
    team_id: rand(1..6) 
  )
end

message = Message.find(1)
message.files.attach(
  io: File.open('public/images/bascketball.png'),
  filename: 'bascketball.png',
  content_type: 'image/png',
  identify: false
)

p("メッセージを作成しました")

month = rand(1..5)
day = rand(1..28)
30.times do |n|
  Event.create!(
      name: "タイトル-#{n+1}",
      start: "2022-0#{month}-#{day} 10:00:00",
      end: "2022-0#{month}-#{day} 11:00:00",
    user_id: rand(1..8) ,
    team_id: rand(1..6) 
  )
end
p("イベントを作成しました")




