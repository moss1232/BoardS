3.times do |number|
  Message.create!(
    content: "#{number}番目のメッセージです！", 
    user_id: 1,
    title: "#{number}番目のタイトルです！"
  )
  puts "#{number}番目のメッセージを作成しました"
end

puts "メッセージの作成が完了しました"

# Event.create!(name: '予定1', start: '2021-07-14 10:00:00', end: '2021-07-14 11:00:00')
# Event.create!(name: '予定2', start: '2021-07-14 10:00:00', end: '2021-07-14 11:00:00')
# Event.create!(name: '予定3', start: '2021-07-14 10:00:00', end: '2021-07-14 11:00:00')
# Event.create!(name: '予定4', start: '2021-07-14 10:00:00', end: '2021-07-14 11:00:00')
