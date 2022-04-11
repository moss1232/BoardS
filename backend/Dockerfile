# Build Backend Packages
FROM ruby:3.0.3

ENV LANG C.UTF-8
ENV TZ Asia/Tokyo

WORKDIR /backend
COPY ./ /backend
RUN apt-get update -qq && \
  apt-get install -y build-essential
RUN bundle install