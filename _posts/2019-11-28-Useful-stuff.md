---
title: "Rails - shortcut"
date: 2019-11-28
categories: Lewagon
---

```ruby
rails g mailer UserMailer welcome
```

```ruby
#app/mailers/application_mailer.rb

class ApplicationMailer < ActionMailer::Base
  defalt

end
```

```ruby
class UserMailer < ApplicationMailer
  def welcome
  @greeting = "Hi"
  mail to: "to@example.org"
  end
end
```

```ruby
# Create Server on Heroku
heroku create project-name --region=us

# Bind your local project to the new server
heroku git:remote -a project-name
```
