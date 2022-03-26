source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.0.2'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails', branch: 'main'
gem 'rails', '~> 6.1.4', '>= 6.1.4.4'
# Use sqlite3 as the database for Active Record
# Use Puma as the app server
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
# gem 'jbuilder', '~> 2.7'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'
# Use Active Model has_secure_password
# gem 'bcrypt', '~> 3.1.7'
# Use Active Storage variant
# gem 'vips', '~> 8.6', '>= 8.6.3.1'
gem 'mini_magick', '~> 4.5', '>= 4.5.1'
gem 'image_processing', '~> 1.2'
gem 'aws-sdk-s3', '~> 1.2', require: false

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.4.4', require: false
# gem 'mysql2'

# Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible
gem 'rack-cors'
gem 'devise', '~> 4.8'
gem 'devise_token_auth', '~> 1.2'
gem 'omniauth', '~> 1.6', '>= 1.6.1'
gem 'prettier'
gem 'faker', '~> 2.20'
gem 'mysql2'
gem 'dotenv-rails'
gem 'puma', '~> 5.0'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'sqlite3', '~> 1.4'
  gem 'byebug', platforms: %i[mri mingw x64_mingw]
end

group :development do
  gem 'listen', '~> 3.3'
gem 'rename', '~> 1.0', '>= 1.0.8'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
end

group :production do
  # gem 'pg', '1.1.4'
# gem 'unicorn', '~> 6.1'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
