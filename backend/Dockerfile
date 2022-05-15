FROM ruby:3.0.3
#  as production-stage
ENV RAILS_ENV production
WORKDIR /app
COPY Gemfile Gemfile.lock ./
RUN bundle install
COPY ./ /app
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

# FROM nginx
# COPY --from=production-stage /app /app
# COPY nginx.conf /etc/nginx/nginx.conf
