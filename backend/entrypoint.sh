#!/bin/bash
set -e

# Remove a potentially pre-existing server.pid for Rails.
rm -f /myapp/tmp/pids/server.pid

# change userid and groupid for volume premission
# usermod -u 1002 -o -m tomohiro
# groupmod -g 1002 tomohiro

# Then exec the container's main process (what's set as CMD in the Dockerfile).
exec "$@"