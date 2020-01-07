---
title: "Flask - Play with data"
date: 2020-01-06
categories: Flask
---

## 1. Flask Shell

```
flask shell
```

```
>>> from myapp import db
>>> from myapp.models import User, Post


>>> u = User(username='john', email=
... 'paduck@gamil.com')
>>> u
<User john>
>>> db.session.add(u)
>>> db.session.commit()

>>> u = User(username='bing', email='p@gmail.com')
>>> u
<User bing>
>>> db.session.add(u)
>>> db.session.commit()


>>> users = User.query.all()
>>> users
[<User john>, <User bing>]


>>> for u in users:
...     print(u.id, u.username, u.emadil)
...
1 john paduck@gamil.com
2 bing p@gmail.com


>>> p = Post(body="my first post", author=u)
>>> p
<Post my first post>
>>> p.author.email
'p@gmail.com'
>>> p.author
<User bing>
>>> db.session.add(p)
>>> db.session.commit()


>>> u.posts
<sqlalchemy.orm.dynamic.AppenderBaseQuery object at 0x10ea75e90>
>>> u.posts.all()
[<Post my first post>]
>>> posts = Post.query.all()
>>> for p in posts:
...     print(p.id, p.author.username)
...
1 bing

>>> User.query.order_by(User.username.desc())
<flask_sqlalchemy.BaseQuery object at 0x10eaabe50>
>>> User.query.order_by(User.username.desc()).all()
[<User john>, <User bing>]
>>> User.query.order_by(User.username.asc()).all()
[<User bing>, <User john>]


>>> users = User.query.all()
>>> for u in users:
...     db.session.delete(u)
...
>>> users
```
## 2. Set default setting


In main.py
```python
from myapp import app, db
from myapp.models import User, Post

@app.shell_context_processor
def make_shell_context():
    return {'db': db, 'User': User, 'Post': Post}
```

Don't need to do below steps anymore<br>
``>>> from myapp import db``<br>
``>>> from myapp.models import User, Post``
