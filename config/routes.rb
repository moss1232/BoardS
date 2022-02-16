Rails.application.routes.draw do

  mount_devise_token_auth_for 'User', at: 'auth', controllers: {
    registrations: 'auth/registrations'
  }

  namespace :api do
    namespace :team do
      resources :messages, only: ['index', 'show', 'create', 'destroy']
      resources :events, only: ['index', 'show', 'create', 'destroy']
    end
    
    namespace :user do
      resources :message, only: ['index', 'show', 'create', 'destroy']
      resources :team, only: ['index', 'show', 'create', 'destroy']
    end
  end
end
