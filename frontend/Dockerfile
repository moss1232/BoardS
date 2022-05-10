# Build Frontend Staticfiles
FROM node:16.14.2

WORKDIR /frontend
COPY ./ /frontend

RUN npm run build

EXPOSE 8080

# Build Backend Packages
FROM ruby:3.0.3

WORKDIR /backend

COPY ./ /backend

RUN apt-get update -qq \
&& bundle install