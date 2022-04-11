# Build Backend Packages
FROM ruby:3.0.3
WORKDIR /backend
COPY ./ /backend
RUN apt-get update -qq && \
  apt-get install -y build-essential
RUN bundle install