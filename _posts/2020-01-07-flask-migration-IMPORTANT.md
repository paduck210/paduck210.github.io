---
title: "Flask - migration in specific folder"
date: 2020-01-06
categories: Flask
---


Change default directory of migration.

### step1. Make new folder: Resources

### step2. Move current files to new folder

- open migrations/versions
- move files into the new folder


### step3. set new directory location in main.py

- pip install Flask-Script needed.
- should working with requirement later.

```python
import os
from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand
#from myapp import app, db
#from myapp.models import User, Post


MIGRATION_DIR = os.path.join('resources')

migrate = Migrate(app, db, directory=MIGRATION_DIR)
manager = Manager(app)

manager.add_command('db', MigrateCommand)

if __name__ == '__main__':
    manager.run()

@app.shell_context_processor
def make_shell_context():
    return {'db': db, 'User': User, 'Post': Post}
```

<br>

### setp4. when model updated

- update models.py first
```python
class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True, unique=True)
    email = db.Column(db.String(120), index=True, unique=True)
    password_hash = db.Column(db.String(128))
    posts = db.relationship('Post', backref='author', lazy='dynamic') # post.author ==> user instance
    about_me = db.Column(db.String(140))
    last_seen = db.Column(db.DateTime, default=datetime.utcnow)
```

- do migration in terminal
- don't forget ``flask db migrate -m "message"``

```
(venv) (base) ➜  microblog git:(master) ✗ flask db migrate -m "about me and last seen in User model"
INFO  [alembic.runtime.migration] Context impl SQLiteImpl.
INFO  [alembic.runtime.migration] Will assume non-transactional DDL.
INFO  [alembic.autogenerate.compare] Detected added column 'user.about_me'
INFO  [alembic.autogenerate.compare] Detected added column 'user.last_seen'
  Generating /Users/paduck/code/paduck210/microblog/resources/versions/21f1a3ec4311_about_me_and_last_seen_in_user_model.py ...  done
```

and should do `flask db upgrade`
```
(venv) (base) ➜  microblog git:(master) ✗ flask db upgrade
INFO  [alembic.runtime.migration] Context impl SQLiteImpl.
INFO  [alembic.runtime.migration] Will assume non-transactional DDL.
INFO  [alembic.runtime.migration] Running upgrade 1a79a82916d4 -> 21f1a3ec4311, about me and last seen in User model
```
