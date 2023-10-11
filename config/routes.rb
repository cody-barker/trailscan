Rails.application.routes.draw do
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  resources :users, only: [:index]
  resources :reviews
  resources :trails, only: [:index, :create] do
    resources :reviews, only: [:create]
  end

  #some custom routes
  get '/users/:id/num_of_trails', to: 'users#num_of_trails'
  get '/user_trail_counts', to: 'users#user_trail_counts'
  #get '/short_trails_users/:num', to: 'trails#short_trails_users'
  get '/popular_trails/:num', to: 'trails#popular_trails'
  get '/longesttrails', to: 'trails#longest'

end
