Rails.application.routes.draw do
  # /api/v1/auctions
  namespace :api, defaults: {format: :json} do 
    namespace :v1 do
      resources :auctions, only:[:index,:show,:create] do
          resources :bids, only:[:create]
      end
      resource :session, only:[:create,:destroy] 
      get('/current_user', to: 'sessions#get_current_user')
      resources :users, only:[:create]
     end
  end
end
