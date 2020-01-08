
---
title: "Flask - Routes dynamic component"
date: 2020-01-07
categories: Flask
---
<br>

#### 1. Route: Set url as ``'user/<username>'``

- When a route has a dynamic component, Flask will accept any text in that portion of the URL, and will invoke the view function with the actual text as an argument.

<br>

#### 2. Function: Use ``first_or_404``
- ``filter_by(username=username)`` this user name is given by URL ! (wow)
- if user is not founded, raise 404 error

```python
@app.route('/user/<username>') # dynamic component
@login_required
def user(username):
    user = User.query.filter_by(username=username).first_or_404() # if user is not founded, raise 404 error page
                                # the username receive from routes
    posts = [
        {'author': user, 'body': 'Test post #1'},
        {'author': user, 'body': 'Test post #2'}
    ]
    return render_template('user.html', user=user, posts=posts)
  ```
<br>

####3. View - To access the profile page
- To access the ``user/<username>``, when set ``url_for``, need to give username argument.
- so, get current_user's username, and passing the value as an argument.


```html
<div> Microblog:
    <a href="{{ url_for('index') }}">Home</a>
    {% if current_user.is_anonymous %}
    <a href="{{ url_for('login') }}">log In</a>
    {% else %}
    <a href="{{ url_for('user', username = current_user.username) }}">Profile</a>
    <a href="{{ url_for('logout') }}">Log Out</a>
    {% endif %}
</div>
```
