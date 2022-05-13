# Be sure to restart your server when you modify this file.

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.

# Read more: https://github.com/cyu/rack-cors

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins(%r{http://172\.\d{2}\.253\.158:\d{4}},
            %r{http://localhost:\d{4}},
            'https://board-vue-frontend.herokuapp.com',
          Boards-1134248987.ap-northeast-1.elb.amazonaws.com:80,
        Boards-1134248987.ap-northeast-1.elb.amazonaws.com)
    resource '*',
             headers: :any,
             expose: %w[access-token expiry token-type uid client],
             methods: %i[get post put patch delete options head]
  end
end
