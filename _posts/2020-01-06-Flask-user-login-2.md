---
title: "Flask - user login setup(2) - Unauthorized"
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
    user = { 'username': 'paduck' }
    title = "Home"
    posts = [
        {
            'author': { 'username' : 'John'},
            'body' : "Harry potter is fun to read, but he has't read it"
        },
        {
            'author': { 'username': 'Mary' },
            'body' : 'My chin condition is not good'
        }
    ]
    return render_template('index.html', title = title, user=user, posts=posts)
```
