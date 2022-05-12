#!/bin/bash
set -e

# Remove a potentially pre-existing server.pid for Rails.
rm -f /myapp/tmp/pids/server.pid
cd /app
bin/rails db:create
bin/rails db:migrate
bin/rails db:seed
bundle exec rails s -p 3000 -b '0.0.0.0'

# change userid and groupid for volume premission
# usermod -u 1002 -o -m tomohiro
# groupmod -g 1002 tomohiro

# Then exec the container's main process (what's set as CMD in the Dockerfile).
exec "$@"