Rails.application.routes.draw do
  namespace :api do
  mount_devise_token_auth_for 'User',
                              at: 'auth',
                              controllers: {
                                registrations: 'auth/registrations'
                              }
                              
                              
                                resources :users, only: ['index', 'update']
    resources :teams, only: ['index', 'create', 'destroy'] do
    collection do
      get :search
      post :join
      delete :leave
    end      
    resources :messages, only: %w[index show destroy create]
      resources :events, only: %w[index show create destroy update]
    end
  end
end
