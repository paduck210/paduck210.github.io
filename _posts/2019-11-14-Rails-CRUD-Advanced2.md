---
title: "Ruby - CRUD-Advanced2"
date: 2019-11-17
categories: Ruby
---

1. link to with Bootstrap

```ruby
<% @cocktails.each do |co| %>
  <div class="card">
    <%= link_to cocktail_path(co), { class: "btn btn-primary" } do %>
      <%= co.name %><span class="label label-primary">OPEN</span>
    <% end %>
  </div>
<% end %>
```


2. One to many relationship

Schema

```ruby
ActiveRecord::Schema.define(version: 2019_11_14_174251) do
  create_table "cocktails", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "doses", force: :cascade do |t|
    t.string "description"
    t.bigint "cocktail_id"
    t.bigint "ingredient_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["cocktail_id"], name: "index_doses_on_cocktail_id"
    t.index ["ingredient_id"], name: "index_doses_on_ingredient_id"
  end

  create_table "ingredients", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "doses", "cocktails"
  add_foreign_key "doses", "ingredients"
end
```


3. Routes

```ruby
Rails.application.routes.draw do
  root :to => "cocktails#index"
  resources :cocktails, only: [:index, :show, :new, :create] do
    resources :doses, only: [:new, :create]
  end
  resources :doses, only: :destroy
end
```


4. Child - Model

```ruby
class Dose < ApplicationRecord
  belongs_to :cocktail
  belongs_to :ingredient

  validates :description, presence: true
  validates_uniqueness_of :cocktail_id, scope: [:ingredient_id]
  # pair of cocktail_id and ingredient_id is unique
end
```

5. Child - Controller

```ruby
class DosesController < ApplicationController

  def new
    @cocktail = Cocktail.find(params[:cocktail_id])
    @ingredients = Ingredient.all
    @dose = Dose.new
  end

  def create
    @cocktail = Cocktail.find(params[:cocktail_id])
    @dose = Dose.new(dose_params)
    @dose.cocktail = @cocktail
    # raise
    if @dose.save
      redirect_to cocktail_path(@cocktail)
    else
      render :new
    end
  end

  def destroy
    @dose = Dose.find(params[:id])
    @dose.destroy
  end

  private

  def dose_params
    params.require(:dose).permit(:description, :ingredient_id) # it should be
  end

end
```

5. Child#view

```ruby
<h1>ADD NEW Incredient</h1>
<%= simple_form_for ([@cocktail, @dose]) do |d| %>
  <%= d.input :description %>
  <%= d.association :ingredient %>
  <%= d.submit %>
<% end %>
```
