# backend
FROM ruby:3.0.3
WORKDIR /backend
COPY ./ /backend
RUN apt-get update -qq && bundle install

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000
