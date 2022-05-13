FROM ruby:3.0.3
#  as production-stage
WORKDIR /app
ENV RAILS_ENV production
COPY ./ /app
RUN apt-get update -qq && bundle install
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

# FROM nginx
# COPY --from=production-stage /app /app
# COPY nginx.conf /etc/nginx/nginx.conf
