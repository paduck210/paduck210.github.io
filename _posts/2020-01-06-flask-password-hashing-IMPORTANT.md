---
title: "Flask - password_hash"
date: 2020-01-06
categories: Flask
---


## 1. password hashing

```python
from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash
from myapp import db


class User(db.Model):
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
```

## 2. test

```terminal
>>> u = User(username='u', email='u')
>>> u
<User u>
>>> u.set_password('111')

>>> u.password_hash
'pbkdf2:sha256:150000$Cdlr1rw3$111fa073450afcde30ca9e3413d9cbc4df0d2665be2568cde653f70c69905aec'

>>> u.check_password('123')
False
>>> u.check_password('111')
True
```
