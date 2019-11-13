---
title: "Rails CRUD"
date: 2019-11-12
categories: studying
---


1. What rails do for me?

1) rails new APP_NAME
2) rails generate model Restaurant name:string address:strinng
3) rails db:migrate
4) Edit details of model
5) rails db:migrate
6) rails generate controller Restarant method_name method_name method_name


```ruby
rails db:drop     # Drops the database (lose all your data!)
rails db:create   # Creates the database with an empty schema
rails db:migrate  # Runs pending migrations on the database schema
rails db:seed     # Runs seeds.rb file
rails db:rollback # Revert the last migration
rails db:reset    # Drops database + replays all migration + runs seed
```


2. UPDATE 

Because any user can access or edit data form in HTML, make 'params' locked.
Make the `params.require(:model).permit(:method)` on the last line, 
and mark it as to private

```
class RestaurantsController < ApplicationController
  def update
    restaurant = Restaurant.find(params[:id])
    restaurant.update(restaurant_params)
    redirect_to restaurant_path(restaurant)
  end

  [...]

  private

  def restaurant_params
    params.require(:restaurant).permit(:name, :address, :stars)
  end
end
```
