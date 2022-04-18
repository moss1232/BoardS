# Boards
<p align="center">
  <img src="https://user-images.githubusercontent.com/86171064/160265284-5206e80c-158d-4841-a4fd-0478c44fdc31.png" />
</p>

url:<https://board-vue-frontend.herokuapp.com>

## 概要

メッセージ投稿や共有カレンダー機能を実装したの情報共有サービス  

![boards](https://user-images.githubusercontent.com/86171064/161185716-b6579727-0ad4-4833-92bb-e6b5731928b5.gif)

## 制作背景

私は大学院で研究をしていたころ，数人のチームで同じテーマの研究を扱っていました．その時はメールを使って教授とやりとりをしており，過去のメールを探したり，日程調整を文字ベースでしたりと色々面倒な点があったため，このサービスを作りました．

## 工夫した点

直感的に使い方が分かるような使用にしました．これは，既存の情報共有サービスの問題点として，登録に手間がかかったり，機能が多く使い方を覚えるのに時間がかかることがあるためです．技術的にはCSSフレームワークを多用した点，SPA化しスムーズに動作させる点等があげられます．

# 設計詳細
## 基本機能

- ログイン/ログアウト
- グループ作成、検索、削除
- メッセージ投稿
- 画像投稿
- 共有カレンダー

## 使用技術

- フロントエンド：HTML/CSS/Javascript/Vue.JS/
  - 拡張機能：Vuex/VueRouter/Vuetify/Vuelidate
- バックエンド：Ruby/Rails(APIモード)
  - テスト：Rspec
  - gem：devise-auth-token/rubocop
- インフラ：Heroku/AWS(S3)
## ER 図

<p align="center">
  <img src="https://user-images.githubusercontent.com/86171064/158748878-8332c240-d46a-43fc-9c8a-e087ef260f91.png" />
</p>

## インフラ図

![インフラ図 drawio (1)](https://user-images.githubusercontent.com/86171064/161284440-6d34b9ff-0ebc-4155-a72b-878d83c4f787.png)

## 作者
url:<https://profile-site3009.herokuapp.com/>