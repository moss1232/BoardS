Rails.application.routes.draw do


  resources :events, only: ['index', 'show', 'create', 'destroy', 'update']


  mount_devise_token_auth_for 'User', at: 'auth', controllers: {
    registrations: 'auth/registrations'
  }
  resources :messages, only: ['index'] do
    member do
      resources :likes, only: ['create']
    end
  end
  
  resources :likes, only: ['destroy']
end
