Rails.application.routes.draw do
  mount_devise_token_auth_for 'User',
                              at: 'auth',
                              controllers: {
                                registrations: 'auth/registrations'
                              }

  namespace :api do
    resources :users, only: ['index']
    resources :teams do
      resources :messages, only: %w[index show destroy create]
      resources :events, only: %w[index show create destroy]
    end
  end
end
