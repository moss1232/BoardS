FROM ruby:3.0.3
WORKDIR /app
COPY ./ /app
RUN apt-get update -qq && bundle install
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]