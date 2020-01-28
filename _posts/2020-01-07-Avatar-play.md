---
title: "Flask - Avatar generator"
date: 2020-01-07
categories: Flask
---
<br>


<b>Fun part !</b> <br>
- To get random img of each user's avatar, you can use this library.
- after enter one's mail adderess, it will return hash.
- and on the below website, with the hash, it will return random img automatically. (You don't need to find random person's face anymore)


<br>

#### Example
```
>>> from hashlib import md5
>>> md5(b'hjyu1408@gmail.com').hexdigest()
'0bdc3b33929c6b622d6df8effae9966a'
```

``https://gravatar.com/avatar/0bdc3b33929c6b622d6df8effae9966a?s=256&d=identicon``

<br>

<img src ="https://blog.miguelgrinberg.com/static/images/mega-tutorial/ch06-avatars.png">

#### implement on Model
- On the User Model, make new function with Avatar to get full URL

```python
#class User(UserMixin, db.Model):
#    id = db.Column(db.Integer, primary_key=True)
#    username = db.Column(db.String(64), index=True, unique=True)
#    email = db.Column(db.String(120), index=True, unique=True)
#    password_hash = db.Column(db.String(128))
#    posts = db.relationship('Post', backref='author', lazy='dynamic') # post.author ==> user instance
#    about_me = db.Column(db.String(140))
#    last_seen = db.Column(db.DateTime, default=datetime.utcnow)#

#    def __repr__(self):
#        return '<User {}>'.format(self.username)#

    def avatar(self, size):
        digest = md5(self.email.lower().encode('utf-8')).hexdigest()
        return 'https://gravatar.com/avatar/{}?d=identicon&s={}'.format(
            digest, size)
```

- use the Avatar function in html, argument 128 work as size
```html
<table>
    <tr valign="top">
        <td><img src="{{ user.avatar(128) }}"</td>
        <td>
            <h1>User: {{ user.username }}</h1>
            {% if user.about_me %}<p> {{ user.about_me }}</p>{% endif %}
            {% if user.last_seen %}<p>{{ user.last_seen }}</p>{% endif %}
        </td>
    </tr>
</table>
```
