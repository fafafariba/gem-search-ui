Rails.application.routes.draw do

  defaults format: :json do
    resources :gems, param: :name, only: [:show]
  end
  root "static_pages#root"
end
