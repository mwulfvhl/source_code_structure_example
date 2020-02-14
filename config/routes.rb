Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'home#index'

  get '/feature_one' => 'feature_one#welcome'
  get '/feature_two' => 'feature_two#welcome'
  get '/feature_two/more' => 'feature_two#more'
end
