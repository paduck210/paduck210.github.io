---
title: "Rails CRUD Advanced"
date: 2019-11-13
categories: Lewagon
---


1. Routes

To create CRUD routes, use resources

```ruby
Rails.application.routes.draw do
    resources :flats
end
```

```ruby
Rails.application.routes.draw do
    resources :flats, only: [:new, :create]
end
```


2. Routes - Nested

If retaurnt << reveiws?

```ruby
Rails.application.routes.draw do
  resources :restaurants do
    resources :reviews, only: [:index, :new, :create] # should be related to restaurant ID
  end
  resources: reviews, only: [:show, :create, :update, :destroy] # after having own review ID
end
```


3. Model

1) Terminal
```ruby
rails g model Restaurant name rating:integer # default is string
```
```ruby
rails g model Review name rating:integer # default is string
```

2) Model<br>
Should put has_many to Mother Model


```ruby
class Restaurant < ApplicationRecord
  has_many :reviews, :dependent => :destroy

  validates :name, presence: true
  validates :address, presence: true
  validates :category, presence: true, inclusion: { in: ["chinese", "italian", "japanese", "french", "belgian"] }
end
```


```ruby
class Review < ApplicationRecord
  belongs_to :restaurant

  validates :content, presence: true
  validates :rating, numericality: true, inclusion: { in: 0..5 }
end
```

4. Add more routes with ID = member

```ruby
Rails.application.routes.draw do
  resources :restaurants do
    member do                          # member => restaurant id in URL
      get 'chef'                       # RestaurantsController#chef
    end
  end
end
```

5. Add more routes without ID = collection

```ruby
Rails.application.routes.draw do
  resources :restaurants do
    collection do                     # collection => no restaurant id in URL
      get 'top'                       # RestaurantsController#top
    end
  end
end
```

6. Simple_form in View

Need to put `gem 'simple_form'` in gemfile first

```ruby
<%= simple_form_for [@restaurant] do |f| %>
  <%= f.input :name %>
  <%= f.input :address %>
  <%= f.input :phone_number %>
  <%= f.input :category %>
  <%= f.submit "add to list", class: "btn btn-primary" %>
<% end %>
```


7. Nesting_simple_form in View

Case of create/destroy/edit/new (restaurants/12/reviews)

```ruby
 def create
    @restaurant = Restaurant.find(params[:restaurant_id])
    @review = Review.new(review_params)
    @review.restaurant = @restaurant
    if @review.save
      redirect_to restaurant_path(@restaurant)
    else
      render :new
    end
  end
```

```ruby
<%= simple_form_for ([@restaurant, @review]) do |f| %>
  <%= f.input :content %>
  <%= f.input :rating %>
  <%= f.submit "add review", class: "btn btn-primary" %>
<% end %>
```
