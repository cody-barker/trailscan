Rails.application.routes.draw do
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  resources :users, only: [:index]
  resources :reviews, only: [:index, :create, :update, :destroy]
  resources :trails, only: [:index, :create] do
    resources :reviews, only: [:create]
  end

  #some custom routes
  get '/users/:id/num_of_trails', to: 'users#num_of_trails'
  get '/user_trail_counts', to: 'users#user_trail_counts'
  get '/short_trails/:num', to: 'trails#short_trails'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
