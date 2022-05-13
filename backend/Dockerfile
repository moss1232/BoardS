# Build Backend Packages
FROM ruby:3.0.3

WORKDIR /backend

COPY ./ /backend

RUN apt-get update -qq \
&& bundle install

# ENV LANG C.UTF-8
# ENV TZ Asia/Tokyo
# CMD [ "bundle", "exec", "rails", "s" ]