---
title: "Flask - Join table"
date: 2020-01-10
categories: Flask
---

- To make ``followed_posts``function

<br>

1. join tables: Post table + Followers table <br>

``Post.query.join(
    followers,(followers.c.followed_id == Post.user_id))``

<br>

2. Find the post, this ``user(self)``is following.(As a fan, find star's post)

``
.filter(
    followers.c.follower_id == self.id)
``
<br>

3. To show ``user(self)``'s posts & star's posts together, do `union`


```python
followers = db.Table('followers',
    db.Column('follower_id', db.Integer, db.ForeignKey('user.id')),
    db.Column('followed_id', db.Integer, db.ForeignKey('user.id'))
)

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

    def followed_posts(self):
        # followed = Posts I follow someone (Paduck => Darly)
        followed = Post.query.join(
            followers,(followers.c.followed_id == Post.user_id)).filter(
                followers.c.follower_id == self.id)
        # My posts + Posts I followed
        return followed.union(self.posts).order_by(Post.timestamp.desc())
```
