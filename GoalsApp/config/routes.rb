Rails.application.routes.draw do
  resources :users, only: [:new, :create, :index, :show]
  
  resource :session, only: [:create, :destroy, :new]
end
