---
title: "Flask - migration in specific folder"
date: 2020-01-06
categories: Flask
---


Change default directory of migration.

## step1. Make new folder: Resources

## step2. Move current files to new folder

- open migrations/versions
- move files into the new folder


## step3. set new directory location in main.py

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
