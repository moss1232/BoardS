FROM ruby:3.0.3
RUN apt-get update -qq && \
  apt-get install -y build-essential
WORKDIR /myapp
COPY ./ /myapp
RUN bundle install

