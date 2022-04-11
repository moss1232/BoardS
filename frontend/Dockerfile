# Build Frontend Staticfiles
FROM node:16.14.2
WORKDIR /frontend
COPY ./ /frontend

RUN apt-get update -y && \
  apt-get upgrade -y && \ 
  npm install && \
  npm run build 