# Boards

<p align="center">
  <img src="https://user-images.githubusercontent.com/86171064/160265284-5206e80c-158d-4841-a4fd-0478c44fdc31.png" />
</p>

<!-- url:<http://boards-1134248987.ap-northeast-1.elb.amazonaws.com/>
ゲストログインボタンから簡単にログインできます -->

# 概要

チームメンバーとの情報共有を目的としたサービスです．
メッセージ投稿機能や共有カレンダー機能などを実装しています

![boards](https://user-images.githubusercontent.com/86171064/161185716-b6579727-0ad4-4833-92bb-e6b5731928b5.gif)

# 機能

- ログイン/ログアウト/ゲストログイン
- グループ作成、検索、削除
- メッセージ投稿
- 画像投稿
- 共有カレンダー

# 工夫した点

- フロントエンド，バックエンドの開発分離，SPA 化
  - Rails を json データを返す API モードで採用
  - axios を用いた非同期処理
- Docker の実装
  - 開発環境では DockerCompose を用い，複数コンテナを 1 コマンドで同時起動
  - 本番環境では fargate を採用し，サーバーレス化
- Vuex, Vuerouter, ActiveRecode などのライブラリの採用
  - Vuex でステート管理
  - Vuetify で UI 向上，レスポンシブデザインを実現
  - Vuerouter で画面遷移を無くし，SPA 化
  - Vuelidate でフロントエンドでもフォーム入力などにバリデーションを実装
  - ActiveRecord で画像投稿機能を実装
  - Rspec で API の request,modelSpec などを実装
- インフラに AWS を実装

# 使用技術

- フロントエンド
  - Vue.JS 2.6.1
  - VueCLI 5.0.4
    - 主要ライブラリ：Vuex/VueRouter/Vuetify/Vuelidate/Axios
- バックエンド
  - Ruby 3.0.3/Rails 6.1.5(API モード)
    - 主要ライブラリ：Rspec/ActiveRecord/devise-auth-token/rubocop/aws-sdk-s3/cors
- インフラ
  - AWS
    - コンテナ技術：ECS(fargate)
    - DB：RDS(Mysql)
    - その他：S3, SSM, ALB
  - Docker 20.10.14
    - DockerCompose 1.29.2

# ER 図

<p align="center">
  <img src="https://user-images.githubusercontent.com/86171064/158748878-8332c240-d46a-43fc-9c8a-e087ef260f91.png" />
</p>

# インフラ図

![インフラ図 drawio (1)](https://user-images.githubusercontent.com/86171064/168984415-8dc902de-b74f-4e38-aad3-1cdcb8242b83.png)

- S3 は ActiveRecord のファイルを保管
- SSM は RDS への接続情報および Rails の masterkey を保管

<!-- # 作者
url:<https://profile-site3009.herokuapp.com/> -->
