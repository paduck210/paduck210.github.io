---
title: "Python - Class advanced with Super"
date: 2020-01-08
categories: Python
---

- When Create Child class, send the parent class as a parameter when creating the child class
- Child class will get ``__init__`` and functions of Parent's



```python
class Apartment(object):
    def __init__(self, name, price, *args, **kwargs):
        print("Apartment:", args, kwargs)
        self.name = name
        self.price = price

    def update_price(self, price):
        self.price = price

class MokdongApartment(Apartment):
    def discount_price(self):
        self.price *= 0.9

class DaejeonApartment(Apartment):
    def update_price(self, price, discount=0.3):
        # Class method overriding
        self.price = price * discount

mokdong_apartment = MokdongApartment("9danji", 1000)
mokdong_apartment.update_price(200)
print(mokdong_apartment)
print(mokdong_apartment.name)
print(mokdong_apartment.price)

dj_apt = DaejeonApartment("kaist", 500)
dj_apt.update_price(200)
print(dj_apt)
print(dj_apt.name)
print(dj_apt.price)
```

<br>

- In case of `super(NewCondo, self)` it moves to parent's class which is Apartment class and working with the `__init__`.
- `NewCondo` class's parameter `[*args]` and `{**kwargs}`
- `[*args]` = arguments -> Python has *args which allow us to pass the variable number of non keyword arguments to function.
- `{**kwargs}` = keyword arguments -> Python passes variable length non keyword argument to function using *args but we cannot use this to pass keyword argument. For this problem Python has got a solution called **kwargs, it allows us to pass the variable length of keyword arguments to the function.


```python
class NewCondo(Apartment):
    def __init__(self, pool_size, *args, **kwargs):
        super(NewCondo, self).__init__(*args, **kwargs)
        self.pool_size = pool_size
        self.args = args
        self.kwargs = kwargs

    def update_price(self, price):
        super(NewCondo, self).update_price(price)


new_condo = NewCondo(150, "H3C 0G3", 5000, 10, floor="22", town="Grifftown")
print(new_condo)
print(new_condo.pool_size)
print(new_condo.name)
print(new_condo.price)
print(new_condo.args[0])
print(new_condo.kwargs['floor'])

new_condo2 = NewCondo(150, *["H3C 0G3", 5000, 10], **{"floor": "22", "town": "Grifftown"})
print(new_condo2)
print(new_condo2.pool_size)
print(new_condo2.name)
print(new_condo2.price)
print(new_condo2.args[0])
print(new_condo2.kwargs['floor'])
```
