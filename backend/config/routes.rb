Rails.application.routes.draw do
  mount_devise_token_auth_for 'User',
  at: 'auth',
  controllers: {
    registrations: 'auth/registrations'
  }
  
  namespace :api do
    resources :health_check, only: :index    end
    resources :users, only: %w[index update]
    resources :teams, only: %w[index create destroy] do
      collection do
        get :search
        post :join
        delete :leave
      end
      resources :messages, only: %w[index show create]
      resources :events, only: %w[index create destroy update]
  end
end
