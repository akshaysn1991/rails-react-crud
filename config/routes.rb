Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do 
    namespace :v1 do 
     resources :articles, only: [:index, :create, :destroy, :update]
     resources :questions, only: [:index, :create, :destroy, :update]
    end 
  end 
  root to: 'home#index'
  post 'home/import' => 'home#import', as: :import_questions
  get 'home/view_data' => 'home#view_data'


end
