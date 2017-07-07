Rails.application.routes.draw do
  root to: "static_pages#root"
  # get '/favorites' => "static_pages#favorites"

  defaults format: :json do
    resources :gems, only: [:index]
  end
end
