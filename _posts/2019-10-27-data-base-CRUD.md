---
title: "DB BASE - CRUE"
date: 2019-10-27
categories: Ruby
---

1. CRUE

```ruby
# CREATE
INSERT INTO doctors (name, age, speciality) VALUES ('Dr.Jung','30','Generalist')

# READ
SELECT * FROM doctors

# UPDATE
UPDATE doctors SET speciality = 'Dentist', age = 32 WHERE id = 3

# DELETE
DELETE FROM doctors WHERE id = 3
```

2. SET ID is DATA BASE responsibility.

After you INSERT new data to DB base, put DB.last_insert_row_id after the line.

```ruby
# Save in Perminant Memory
doctor = Doctor.new(name: "Jung", age: 42)
doctor.id
# => nil, because we didn't assign ID

DB.execute("INSERT INTO doctors (name, age, speciality) VALUES ('Dr.Jung','30','Generalist')")
DB.last_insert_row_id
```

3. DB excute will return you Array of Array.

If you want to get rid of the arrays, use .flatten method.
However, it will erases all the array no matter how many arrays it has.
So you need use it wisely. Keep debugging. Check the return value of line.
```ruby
# Array of Array
doctors = DB.execute("SELECT name, age FROM doctors")
# => [
#      [ "John Smith", 39 ],
#      [ "Emma Reale", 31 ]
#    ]
```

4. Array of HASH

I can set DB return as HASH. It's better than array of array can find key value easily and correctly.
Key will return as a String, not a symbol


```ruby
DB.results_as_hash = true
doctors = DB.execute("SELECT name, age FROM doctors")
# => [
#      { "name" => "John Smith", "age" => 39 , 0 => "John Smith", 1 => 39 },
#      { "name" => "Emma Reale", "age" => 31 , 0 => "Emma Reale", 1 => 31 }
#    ]

doctor = doctors.first
name = doctor["name"]
age = doctor["age"]
puts "Doctor #{name} is #{age} years old"
```


5. Reference

```ruby
class Post
  attr_reader :id
  attr_accessor :title, :url, :votes

  # - initialize
  def initialize(attributes = {})
    @id = attributes[:id]
    @title = attributes[:title]
    @url = attributes[:url]
    @votes = attributes[:votes]
  end

  # - self.find
  def self.find(id)
    raw = DB.execute("SELECT * FROM posts WHERE id = ?", id).flatten
    if raw[0].nil?
      return nil
    else
      result = Post.new(id: raw[0], title: raw[1], url: raw[2], votes: raw[3])
    end
  end

  def save
    @id ? update : save
  end

  def create
    DB.execute('INSERT INTO posts (title, url, votes) VALUES (?, ?, ?)', @title, @url, @votes)
    @id = DB.last_insert_row_id
  end

  def update
    DB.execute('UPDATE posts SET title = ?, url = ?, votes = ? WHERE id = ?', @title, @url, @votes, @id)
  end

  def destroy
    DB.execute("DELETE FROM posts WHERE id = ?", @id)
  end

  def self.all
    top_array = DB.execute("SELECT * FROM `posts`")
    array = []
    top_array.each do |raw|
      array << result = Post.new(id: raw[0], title: raw[1], url: raw[2], votes: raw[3])
    end
    array
  end

end
```
