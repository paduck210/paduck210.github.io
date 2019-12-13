<h3>Basic Loop with text<h3>

```python
actors = ["harry", "brad", "emma"]

for actor in actors:
  print(f"Actor name is \"{actor.title()}\" ")
  print(f"I can' wait to see {actor.title()}'s movie again ")

# Actor name is "Harry"
# Actor name is "Brad"
# Actor name is "Emma"
```

<h3>Basic Loop with number<h3>

```python
for value in range(1,10):
  print(value)

numbers = list(range(1,10,2))
print(numbers)
# [1, 3, 5, 7, 9]
```


<h3>Basic Loop with List<h3>

```python
list = []
for v in range(1,11):
  list.append(v**2)

print(list)
# [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

print(min(list)) # 1
print(max(list)) # 100
print(sum(list)) # 385
```

<h3>One line of Code</h3>

Below two codes are working same

```python
new_list = []
for number in list(range(1,11)):
  new_list.append(number**3)
# [1, 8, 27, 64, 125, 216, 343, 512, 729, 1000]
```

```python
new_list = [number**3 for number in range(1,11)]
# [1, 8, 27, 64, 125, 216, 343, 512, 729, 1000]
```


<h3>Slicing list </h3>

```python
new_list = [number**3 for number in range(1,11)]
# [1, 8, 27, 64, 125, 216, 343, 512, 729, 1000]

print(new_list[0:3]) # [1, 8, 27]
print(new_list[:3])  # [1, 8, 27]
print(new_list[1:4]) # [8, 27, 64]
print(new_list[-2:]) # [729, 1000]
```


<h3>Looping with Slicing List</h3>

- use a index/value with list 
- slicing list

```python
names = ["tom", "paul", "mike", "jay", "johny", "lyn"]
print("This are top 3 students in the class")
for i, name in enumerate(names[:3]):
  print(f"Number{i+1}: {name.title()}")

# This are top 3 students in the class
# Number1: Tom
# Number2: Paul
# Number3: Mike
```

