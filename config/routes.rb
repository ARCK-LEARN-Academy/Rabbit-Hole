Rails.application.routes.draw do
  resources :posts
  resources :user_burrows
  resources :burrows
  devise_for :users
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root to: "pages#home"
  
  

end
