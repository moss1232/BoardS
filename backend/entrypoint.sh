#!/bin/bash
set -e

# Remove a potentially pre-existing server.pid for Rails.
rm -f /myapp/tmp/pids/server.pid
cd /app
RAILS_ENV=production bin/rails db:create
RAILS_ENV=production bin/rails db:migrate
RAILS_ENV=production bin/rails db:seed
bundle exec rails s -p 3000 --environment production

# change userid and groupid for volume premission
# usermod -u 1002 -o -m tomohiro
# groupmod -g 1002 tomohiro

# Then exec the container's main process (what's set as CMD in the Dockerfile).
exec "$@"