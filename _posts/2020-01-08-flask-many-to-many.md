---
title: "Flask - Many to Many Relationship"
date: 2020-01-08
categories: Flask
---
<br>

### background

- User can be a follow and be followed by another user!
- one user can follow many users, user can get many followers  

![alt text](https://blog.miguelgrinberg.com/static/images/mega-tutorial/ch08-followers-schema.png)

![](https://res.cloudinary.com/dsvdkyjhh/image/upload/v1578546079/IMG_3934_hys9xo.jpg)

<br>

### Code - Make Many to Many relationship

- In models.py
- ``follwers`` doesn't need to be a Model class since this is an auxiliary table that has no data other than the foreign keys, I created it without an associated model class.
- if you want to know detail, check this original blog [https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-viii-followers]



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


- Paduck followed Darly
- Darly has follwers Paduck
- To follow ``fan.followed.append(star)``
- To unfollow ``fan.followed.remove(star)``
- To check followed ``fan.followed.all()``
- To check following ``star.followers.all()``

```
>>> a = User.query.get(1)
>>> a
<User Paduck>
>>> b = User.query.get(2)
>>> b
<User susan>
>>> a.followed.append(b)
>>> db.session.commit()
>>> a.followed.all()
[<User Darly>, <User susan>]
>>> b.followers.all()
[<User Paduck>]
>>> a.followed.remove(b)
>>> db.session.commit()
>>> a.followed.all()
[<User Darly>]
>>> b.followers.all()
[]
>>>
```

<br>

#### Code - Make it simple by create model functions
```python
    def follow(self, user):
        if not self.is_following(user):
            self.followed.append(user)

    def unfollow(self, user):
        if self.is_following(user):
            self.followed.remove(user)

    def is_following(self, user):
        return self.followed.filter(
            followers.c.followed_id == user.id).count() > 0
```
```
>>> a = User.query.get(1)
>>> b = User.query.get(2)
>>> a.is_following(b)
False
>>> a.follow(b)
>>> db.session.commit()
>>> a.is_following(b)
True
>>> a.unfollow(b)
>>> db.session.commit()
>>> a.is_following(b)
False
```
