# Boards
<p align="center">
  <img src="https://user-images.githubusercontent.com/86171064/160265284-5206e80c-158d-4841-a4fd-0478c44fdc31.png" />
</p>

url:<https://board-vue-frontend.herokuapp.com>

## 概要

部活やサークルといった数十人規模のカジュアルなグループ内の情報共有サービス  

![boards](https://user-images.githubusercontent.com/86171064/161185716-b6579727-0ad4-4833-92bb-e6b5731928b5.gif)

# 制作背景
## 既存サービスの問題

情報共有サービスは有名なものとして Slack や Teams などがあげられるが、これらはサービス確定に伴い機能が追加され、慣れれば便利だが初見では使い方が直感的に分かりづらいという問題点がある。  
これが顕著に表れる例として、以下のような状況が考えられる。  
<例> サークルで簡単な情報共有をする際に、グループ全員に使い方を習得させるのが困難

## 解決方法

本プロダクトでは初見でも直感的に使用方法が分かるよう、以下の点を重視し解決を図った

- シンプルで分かりやすい UI
- SPA化による UX 向上

# 設計詳細
## 基本機能

- ログイン/ログアウト
- グループ作成、検索、削除
- メッセージ投稿
- 画像投稿
- 共有カレンダー

## 補助機能
- レスポンシブデザイン
- バリデーション
  - フロントエンド：vuelidate
  - バックエンド：devise_auth_token認証，Active Record

## 使用技術

- フロントエンド：HTML/CSS/Javascript/Vue.JS/Vuex/VueRouter/Vuetify
- バックエンド：Ruby/Rails(APIモード)
## ER 図

<p align="center">
  <img src="https://user-images.githubusercontent.com/86171064/158748878-8332c240-d46a-43fc-9c8a-e087ef260f91.png" />
</p>

## インフラ図

![インフラ図 drawio (1)](https://user-images.githubusercontent.com/86171064/161284440-6d34b9ff-0ebc-4155-a72b-878d83c4f787.png)

## 作者


