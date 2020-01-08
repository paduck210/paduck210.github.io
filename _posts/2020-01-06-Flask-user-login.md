---
title: "Flask - user login setup(1) - basic"
date: 2020-01-06
categories: Flask
---
### 1. __init__py

- install LoginManager

```python
#from flask import Flask
#from config import Config
#from flask_sqlalchemy import SQLAlchemy
#from flask_migrate import Migrate
from flask_login import LoginManager

#app = Flask(__name__)
#app.config.from_object(Config)
#db = SQLAlchemy(app)
#migrate = Migrate(app, db)
login = LoginManager(app)

#from myapp import routes, models
```

##2. Model
- change User model's argument; ``UserMixin``
- make new routes and function; ``@login.user_loader``

```Python
from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash
from myapp import db, login
from flask_login import UserMixin


class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True, unique=True)
    email = db.Column(db.String(120), index=True, unique=True)
    password_hash = db.Column(db.String(128))
    posts = db.relationship('Post', backref='author', lazy='dynamic') # post.author ==> user instance

    def __repr__(self):
        return '<User {}>'.format(self.username)

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password) # return True/False


@login.user_loader
def load_user(id):
    return User.query.get(int(id))
```

## 3. routes

- make login and logout function
- ``current_user, login_user, logout_user`` are given by Flask.

```Python
from flask import render_template, flash, redirect, url_for
from flask_login import login_user, current_user, logout_user
from myapp import app
from myapp.forms import LoginForm
from myapp.models import User

@app.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated: # already confirmed as a user
        return redirect(url_for('index'))

    form = LoginForm() # Get Login Form

    if form.validate_on_submit(): # On a Filed, when user click submit button
        user = User.query.filter_by(username=form.username.data).first()
        # get a user instance match with username

        if user is None or not user.check_password(form.password.data):  
        # if username is incorrect or password is wrong
            flash('Invalid username or password') # show this message on the page
            return redirect(url_for('login')) # and stay on login page

        login_user(user, remember=form.remember_me.data) # if user success to log in
        return redirect(url_for('index')) # go to index page

    return render_template('login.html', title='Sign In', form=form)


@app.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('index'))
```
