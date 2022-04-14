mainuser = User.create!(
  name: 'Main',
  email: 'a@gmail.com',
  password: 'aaaaaa',
  password_confirmation: 'aaaaaa'
)
mainuser.avatar.attach(
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

3.times do |n|
  name  = Faker::Name.unique.name
  email = "example-#{n+1}@gmail.com"
  password = "password"
  user = User.create!(
    name:  name,
    email: email,
    password: password,
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

@user_ids = User.pluck(:id)
Team.create(name: 'Main', password: 'Main', user_ids: @user_ids.sample(4))
Team.create(name: 'test', password: 'password', user_ids: [subuser1.id])

4.times do |n|
  name  = "team-#{n+1}"
  password = "password"
  Team.create!(
    name:  name,
    password: password,
    user_ids: @user_ids.sample(4)
  )
end

team = Team.find_by(id: mainuser.id)
team.avatar.attach(
  io: File.open('public/images/universe.png'),
  filename: 'universe.png',
  content_type: 'image/png',
  identify: false
)
p("チームを作成しました")

@team_ids = Team.pluck(:id)

20.times do |n|
  Message.create!(
    title: "タイトル-#{n+1}",
    content: "コンテンツ",
    user_id: @user_ids.sample ,
    team_id: @team_ids.sample 
  )
end

message = Message.find_by(id: mainuser.id)
message.files.attach(
  io: File.open('public/images/bascketball.png'),
  filename: 'bascketball.png',
  content_type: 'image/png',
  identify: false
)

p("メッセージを作成しました")

30.times do |n|
  month = rand(3..5)
  day = rand(1..28)
  team = Team.find_by(id: @team_ids.sample)
  user_id = team.user_ids.sample
  Event.create!(
      name: "タイトル-#{n+1}",
      start: "2022-0#{month}-#{day} 10:00:00",
      end: "2022-0#{month}-#{day} 11:00:00",
    user_id: user_id ,
    team_id: team.id 
  )
end
p("イベントを作成しました")




