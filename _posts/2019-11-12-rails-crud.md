---
title: "Rails CRUD"
date: 2019-11-12
categories: studying
---


0. form_for

If you do form for, instead of httml source, <br>
techinally it works same as like HTML source<br>
but it do connect to next page, and set method stuff for us<br>
<br>
If `form_for(@resto)`<br>
has id X ===> next: create / method: push<br>
has id O ===> next: update / method: patch<br>
<br>

```ruby
<!-- app/views/restaurants/_form.html.erb -->
<%= form_for(@restaurant) do |f| %>
  <%= f.label :name %>
  <%= f.text_field :name %>
  <%= f.label :address %>
  <%= f.text_field :address %>
  <%= f.submit %>
<% end %>
```
<br>
short cut for form_for for same pages<br>
```ruby
<!-- app/views/restaurants/new.html.erb -->
<%= render 'form' %>
```

```ruby
<!-- app/views/restaurants/edit.html.erb -->
<%= render 'form', restaurant: @restaurant %>
```


1. What rails do for me? <br>

1) rails new APP_NAME <br>
2) rails generate model Restaurant name:string address:strinng <br>
3) rails db:migrate <br>
4) Edit details of model <br>
5) rails db:migrate <br>
6) rails generate controller Restarant method_name method_name method_name <br>


```ruby
rails db:drop     # Drops the database (lose all your data!)
rails db:create   # Creates the database with an empty schema
rails db:migrate  # Runs pending migrations on the database schema
rails db:seed     # Runs seeds.rb file
rails db:rollback # Revert the last migration
rails db:reset    # Drops database + replays all migration + runs seed
```


3.If I need edit Migration <br>
put this line in Terminal <br>

```ruby
rails generate migration AddAddressToRestaurants address:string
```


4. About CRUD <br>
Make it 7 CRUD routes for me <br>

```ruby
Rails.application.routes.draw do
  resources :restaurants
end
```

In case of only need specific pages<br>
```ruby
Rails.application.routes.draw do
  resources :restaurants, only: [:index, :show]
end
```


5. UPDATE <br>
Because any user can access or edit data form in HTML, make 'params' locked.<br>
Make the `params.require(:model).permit(:method)` on the last line, <br>
and mark it as to private<br>

```ruby
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


6. before action filter<br>

When we need exact same line in Method, <br>
using **before action** like below.<br>
<br>
In this case<br>
```ruby
# app/controllers/restaurants_controller.rb
class RestaurantsController < ApplicationController
  def show
    @restaurant = Restaurant.find(params[:id])
    # ...
  end
  def edit
    @restaurant = Restaurant.find(params[:id])
    # ...
  end
  def update
    @restaurant = Restaurant.find(params[:id])
    # ...
  end
  def destroy
    @restaurant = Restaurant.find(params[:id])
    # ...
  end
end
```
<br>
1) Make set_restaurant Method in Private <br>
2) Add it right after the class line <br>

```ruby
# app/controllers/restaurants_controller.rb
class RestaurantsController < ApplicationController
  before_action :set_restaurant, only: [:show, :edit, :update, :destroy]

  def show
    # ...
  end
  def edit
    # ...  
  end
  def update
    # ...
  end
  def destroy
    # ...
  end

  private

  def set_restaurant
    @restaurant = Restaurant.find(params[:id])
  end
end
```



+++) sample


1. routes

```ruby
Rails.application.routes.draw do

  # CREATE
  get 'tasks/new', to: "tasks#new", as: "new_task"
  post 'tasks', to: "tasks#create", as: "tasks"

  # READ
  get 'tasks/:id', to: "tasks#show", as: "task"
  get 'tasks', to: "tasks#index"

  # UPDATE
  get 'tasks/:id/edit', to: "tasks#edit", as: "edit_task"
  patch 'tasks/:id', to: "tasks#update"

  # DELETE
  delete 'tasks/:id', to: "tasks#destroy"

end

```


2. Controller

```ruby
class TasksController < ApplicationController

  before_action :find_id, only: [:show, :edit, :update, :destroy]

  # CREATE
  def new
    @task = Task.new # This is for rendering form_for
  end

  def create
    @task = Task.new(user_params)
    @task.save
    redirect_to task_path(@task)
  end

  # READ
  def show
    # @task = Task.find(params[:id])
  end

  def index
    @tasks = Task.all
  end

  # UPDATE
  def edit
    # @task = Task.find(params[:id])
  end

  def update
    # @task = Task.find(params[:id])
    @task.update(user_params)
    redirect_to task_path(@task)
  end


  # DELETE
  def destroy
    # @task = Task.find(params[:id])
    @task.destroy
    redirect_to tasks_path # index
  end

  private

  def find_id
    @task = Task.find(params[:id])
  end

  # returns a hash of cat attributes that are safe
  def user_params
    params.require(:task).permit(:title, :details, :completed)
  end

end
```


3. View_ show

```ruby
<h1>Tasks#show</h1>


<div class="card">

  <h3><%= @task.details %></h3>

    <% if @task.completed %>
      <input type="checkbox" checked> This task is finished<br>
    <% else %>
      <input type="checkbox"> This task needs to be finished<br>
    <% end %>

</div>

<%= link_to "⬅️", tasks_path %>
<%= link_to "⚙️", edit_task_path %>
```


4. HTML_index

```ruby

<h1>MY TASK</h1>
<div class="card">
  <ul>
    <% @tasks.each do |task| %>
      <li>
        <input type ="checkbox" <%= "checked" if task.completed %>>
        <%= link_to task.title, task_path(task) %>
        <%= link_to "🔪", task_path(task), method: :delete, data: { confirm: "You really want?"} %>
      </li>
    <% end %>
  </ul>
</div>
<%= link_to "➕", new_task_path %>
```
