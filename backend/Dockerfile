FROM ruby:3.0.3
#  as production-stage
# ARG RAILS_MASTER_KEY
# ENV LANG C.UTF-8
ENV RAILS_ENV production
# ENV RAILS_MASTER_KEY ${RAILS_MASTER_KEY}
WORKDIR /app
COPY Gemfile Gemfile.lock ./
# RUN apt-get update -qq && bundle install
RUN bundle install
COPY ./ /app
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

# FROM nginx
# COPY --from=production-stage /app /app
# COPY nginx.conf /etc/nginx/nginx.conf
