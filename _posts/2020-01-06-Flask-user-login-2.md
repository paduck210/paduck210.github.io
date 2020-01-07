---
title: "Flask - @login_required"
date: 2020-01-06
categories: Flask
---

<br>
To access an Index page, User should login first.

<br>

## step1: __init__py
- set the login View page with 'login'

```Python
#from flask import Flask
#from config import Config
#from flask_sqlalchemy import SQLAlchemy
#from flask_migrate import Migrate
from flask_login import LoginManager

#app = Flask(__name__)
#app.config.from_object(Config)
#db = SQLAlchemy(app)
#migrate = Migrate(app, db)
#login = LoginManager(app)
login.login_view = 'login'

#from myapp import routes, models
```

## step2: put ``login_required`` on Routes/index

- under the ``@app.routes(/)`` and ``@app.routes('/')<br>
- put ``@login_required``.
- So before sign-in, user automatically access to Log in page.
- without step1, step2 is not working


```python
@app.route('/')
@app.route('/index')
@login_required
def index():
```


## + set `Next page` after login for better UX

- After user log in, redirect the page the user was supposed to visit
- It's possible to use parameter of URL ``next``
- for example: ``http://127.0.0.1:5000/login?next=%2Findex``<br>
get ``index`` and redirect the page to index

```python
from flask import render_template, flash, redirect, url_for, request
from werkzeug.urls import url_parse

#@app.route('/login', methods=['GET', 'POST'])
#def login():
#    if current_user.is_authenticated:
#        return redirect(url_for('index'))
#    form = LoginForm() # Get Login Form
#    if form.validate_on_submit():
#        user = User.query.filter_by(username=form.username.data).first() # get a user instance match with username#

#        if user is None or not user.check_password(form.password.data):  # is username is incorrect or password is wrong
#            flash('Invalid username or password') # show this message on the page
#            return redirect(url_for('login')) # and stay on login page
        login_user(user, remember=form.remember_me.data) # after user success to log in
        next_page = request.args.get('next') # user redirect to the page who is supposed to visit
        if not next_page or url_parse(next_page).netloc != '': # get parameter of URL
            next_page = url_for('index')
        return redirect(next_page)
    return render_template('login.html', title='Sign In', form=form)
```
