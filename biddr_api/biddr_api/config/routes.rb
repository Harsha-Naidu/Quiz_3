Rails.application.routes.draw do
  # /api/v1/products
  namespace :api, defaults: {format: :json} do 
    namespace :v1 do
      resources :products, only:[:index,:show,:create,:update,:destroy]
      resource :session, only:[:create,:destroy] 
      get('/current_user', to: 'sessions#get_current_user')
      resources :users, only:[:create]
     end
  end
end
