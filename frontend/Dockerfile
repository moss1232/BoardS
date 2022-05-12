FROM node:16.14.2-alpine as production-stage
USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app
COPY --chown=node:node ./package.json ./
RUN npm install
COPY --chown=node:node . .
RUN npm run build

FROM nginx
COPY --from=production-stage /home/node/app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
