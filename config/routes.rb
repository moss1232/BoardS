Rails.application.routes.draw do

  mount_devise_token_auth_for 'User', at: 'auth', controllers: {
    registrations: 'auth/registrations'
  }

  resources :events, only: ['index', 'show', 'create', 'destroy', 'update']

  resources :messages, only: ['index', 'show', 'create', 'destroy']
end
