#!/bin/bash
set -e
# Rails に対応したファイル server.pid が存在しているかもしれないので削除する。

rm -f /app/tmp/pids/server.pid
# cd /app
# bin/rails db:reset

# volumeするためuser,permissionの変更
echo "Starting with UID : $USER_ID, GID: $GROUP_ID"
useradd -u $UID -o user
groupmod -g $GID user
chown -R user:user /app
# chown -R user:user /app/Gemfile /Gemfile.lock

# Then exec the container's main process (what's set as CMD in the Dockerfile).
exec "$@"