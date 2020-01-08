---
title: "Flask - before request"
date: 2020-01-07
categories: Flask
---

The ``@before_request`` decorator from Flask register the decorated function to be executed right before the view function. This is extremely useful because now I can insert code that I want to execute before any view function in the application, and I can have it in a single place.

```python
# apply this function to all the routes below
@app.before_request
def before_request():
    if current_user.is_authenticated:
        current_user.last_seen = datetime.utcnow()
        db.session.commit()
```
