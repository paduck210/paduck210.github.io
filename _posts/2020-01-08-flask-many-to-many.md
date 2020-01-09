---
title: "Flask - Many to Many Relationship"
date: 2020-01-08
categories: Flask
---
#### background

- User can be a follow and be followed by another user!
- one user can follow many users, user can get many followers  

![alt text](https://blog.miguelgrinberg.com/static/images/mega-tutorial/ch08-followers-schema.png)

### Code

- In models.py
- ``follwers`` doesn't need to be a Model class since this is an auxiliary table that has no data other than the foreign keys, I created it without an associated model class.

```python
followers = db.Table('followers',
    db.Column('follower_id', db.Integer, db.ForeignKey('user.id')),
    db.Column('followed_id', db.Integer, db.ForeignKey('user.id'))
)
```

```python
class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True, unique=True)
    email = db.Column(db.String(120), index=True, unique=True)
    password_hash = db.Column(db.String(128))
    posts = db.relationship('Post', backref='author', lazy='dynamic') # post.author ==> user instance
    about_me = db.Column(db.String(140))
    last_seen = db.Column(db.DateTime, default=datetime.utcnow)
    followed = db.relationship('User',
        secondary=followers,
        primaryjoin=(followers.c.follower_id == id),
        secondaryjoin=(followers.c.followed_id == id),
        backref=db.backref('followers', lazy='dynamic'), lazy='dynamic')
```
