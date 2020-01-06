---
title: "Python - "
date: 2019-12-13
categories: Python
---


<h3>Maketrans</h3>

string function

```python
obj = "python"
before = "thon"
after = "zzzz"
print(obj.translate(string.maketrans(before,after)))
```


in Codewars

<h3>What I did</h3>

```python
dna = "ATTGC"

string = ""

for i in list(range(len(dna))):
  if dna[i] == "T":
    string += "A"
  elif dna[i] == "A":
    string += "T"
  elif dna[i] == "G":
    string += "C"
  else:
    string += "G"

print(string)
```

<h3>Best practice</h3>
- using `maketrans`

```python
dna = "ATTGC"
print(dna.translate(string.maketrans("ATCG","TAGC")))
```
