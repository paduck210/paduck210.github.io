---
title: "Flask - data"
date: 2020-01-06
categories: Flask
---

###1.install
install flask-SQLAlchemy and flask_migrate

```python
# terminal
pip install flask-sqlalchemy
pip install flask-migrate
```

###2.set on __init__py file

```python
from flask import Flask
from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)
migrate = Migrate(app, db)

from myapp import routes, models
```

##3. Create models.py

- create user model
- what ``__repr__`` do is, in Python cell <br>
when call user instance, shown as ``<User username>``

```python
from myapp import db

class User(db.Model):
    id  = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True, unique=True)
    email = db.Column(db.String(120), index=True, unique=True)
    password_hash = db.Column(db.String(128))

    def __repr__(self):
        return '<User {}>'.format(self.username)

```

how to test with Python cell
```
# > from myapp.models import User
# > u = User(username='susan', email='susan@mail.com')
# > u
# < User susan>
```



##4. Migration Setup

- Create Directory migrations (first setting)
```terminal
# terminal
✗ flask db init
```

 - Create table name user
 - it will be added on ``'user_table'.py`` in migrations/versions
 - inside of the file, two function will be made; upgrade, downgrade

```
# terminal
✗ flask db migrate -m "users table"
```

- Execute the upgrade function to create db sql file
- ``app.db`` will be made
```
# terminal
✗ flask db upgrade
```
 
