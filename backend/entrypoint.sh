#!/bin/bash
set -e

rm -f /myapp/tmp/pids/server.pid
cd /app
# RAILS_ENV=production bin/rails db:reset
bundle exec rails s -p 3000
#  -b '0.0.0.0'

# Then exec the container's main process (what's set as CMD in the Dockerfile).
exec "$@"