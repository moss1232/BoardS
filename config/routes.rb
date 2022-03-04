Rails.application.routes.draw do

  get 'teams//api'
  mount_devise_token_auth_for 'User', at: 'auth', controllers: {
    registrations: 'auth/registrations'
  }

  namespace :api do
    resources :users, only: ['index']
    resources :teams do
      resources :messages, only: ['index','show', 'destroy', 'create']
      resources :events, only: ['index', 'show', 'create', 'destroy']
    end
    end
end
