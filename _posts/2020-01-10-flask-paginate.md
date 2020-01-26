---
title: "Flask - Pagination"
date: 2020-01-10
categories: Flask
---
<br>

#### 1. Set up on config

1) config.py
- set the number of Posts will be shown in one page
```python
class Config(object):
    # SECRET_KEY = os.environ.get('SECRET_KEY') or '111111'
    # SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or \
    #     'sqlite:///' + os.path.join(basedir, 'app.db') # after migration
    # SQLALCHEMY_TRACK_MODIFICATIONS = False
    # MAIL_SERVER = os.environ.get('MAIL_SERVER')
    # MAIL_PORT = int(os.environ.get('MAIL_PORT') or 25)
    # MAIL_USE_TLS = os.environ.get('MAIL_USE_TLS') is not None
    # MAIL_USERNAME = os.environ.get('MAIL_USERNAME')
    # MAIL_PASSWORD = os.environ.get('MAIL_PASSWORD')
    # ADMINS = ['redcarpet1@naver.com']
    POST_PER_PAGE = 3
```

#### 2. Important!  Query String argument & Pagination

- `request.args.get('name of argument ')` : Get page number by string argument
- ``paginate(page num, number of posts, setup)``

```python
def index():
    # form = PostForm()
    # if form.validate_on_submit():
    #     post = Post(body=form.post.data, author=current_user)
    #     # post = Post(post=form.body.data, user_id=current_user.id)
    #     db.session.add(post)
    #     db.session.commit()
    #     flash('new post added')
    #     return redirect(url_for('index'))

    # query string argument = /index?page=3 <- get this 3
    page = request.args.get('page', 1, type=int)

    # set up paginate function
    posts = current_user.followed_posts().paginate(
        page, app.config['POST_PER_PAGE'], False)
    return render_template('index.html', posts=posts.items, form=form)
```
Now, it's working with this
- Page 1, implicit: http://localhost:5000/index
- Page 1, explicit: http://localhost:5000/index?page=1
- Page 3: http://localhost:5000/index?page=3


<br>
