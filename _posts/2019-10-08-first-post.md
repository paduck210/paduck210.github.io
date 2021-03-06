---
title: "Ruby - Basic"
date: 2019-10-08
categories: Ruby
---


1. String Sentence >> Array

There are three ways you can define an array of strings without typing quotes

```ruby
%w[Hey Harry Poter] #=> ["Hey", "Harry", "Poter"]
%w(Hey Harry Poter) #=> ["Hey", "Harry", "Poter"]
%w{Hey Harry Poter} #=> ["Hey", "Harry", "Poter"]
```


2. Experiments

```ruby
def get_rid_of_surrounding_whitespaces(a_string)
  a_string.strip
end

def belongs_to?(a_string, a_word)
  a_string.include? a_word
end

def replace(initial_string, old_letter, new_letter)
  return initial_string.gsub(old_letter, new_letter)
end

def exactly_divide(an_integer, a_divider)
  return an_integer / a_divider.to_f
end

def divisible_by_two?(an_integer)
  return an_integer.even?
end

def random_subset(an_array, sample_size)
  return an_array.sample(sample_size) # return array
end

def randomize(an_array)
  return an_array.shuffle
end

def ascending_order(an_array)
  return an_array.sort
end
```



3. 7 most used ruby built-in objects?

```ruby
String like "Hello World"
Integer like 12
Float like 3.14
Array like ["Hello World", 12, 3.14]
TrueClass like true
FalseClass like false
Range like (1..100)
```


4. Method <-> Use

Parameter > inside of Method
Object > assign to the Parameter

```ruby
require 'date'

def age_in_days(day, month, year)
  # TODO: return the age expressed in days given the day, month, and year of birth
  (Date.today - Date.new(year, month, day)).to_i
end
```

```ruby
require_relative './age_in_days'

### Talking with the user ###
puts 'What\'s your year of birth?'
birth_year = gets.chomp.to_i

puts 'What\'s your month of birth?'
birth_month = gets.chomp.to_i

puts 'What\'s your day of birth?'
birth_day = gets.chomp.to_i
#############################
puts 'Computing your age (with the most complicated algorithms)........'

# TODO: This is probably where you'd like to use your brand new function!
calculated_age = age_in_days(birth_day, birth_month, birth_year)


# Finally, print user's age in days:
puts "You are #{calculated_age} days old... phew!"
```



5. Complicated

Understand
condition in Method
Use 'Until a == b' means if it is True do Return / if not, go to next line


Method

```ruby
def coach_answer(your_message)
  # TODO: return coach answer to your_message
  if your_message == "go"
    return ""
  elsif your_message.include?("?") == false
    return "I don't care, get dressed and go to work!"
  elsif your_message.include?("?") == true
    return "Sily question, get dressed and go to work!"
  end
end


def coach_answer_enhanced(your_message)
  # TODO: return coach answer to your_message, with additional custom rules of yours!
  if your_message == "GO"
    return ""
  elsif your_message #capitalize
    return "I can feel your motivation!"
  end
end
```

Use
```ruby
require_relative "coach_answer"
# TODO: Implement the program that makes you discuss with your coach from the terminal.

final_answer = nil

until final_answer == ""
  puts ">>> Ask someting to your coach :)"
  my_question = gets.chomp

  # puts my_question #go
  # puts my_question.upcase #GO
  # puts my_question == "GO" #false
  # if my_question == my_question.upcase
  if my_question == my_question.upcase
    final_answer = coach_answer_enhanced(my_question)
    puts final_answer

  else
    final_answer = coach_answer(my_question)
    puts final_answer
  end
end
```


6. Learn Debugging

1) Which condition the bug occurs?
```ruby
Be specific
  Downcase = go > quit (x)
  Downcase = ? > "" (o)
  Downcase = ?=x > "" (o)
  upcase = GO > quit (o)
  upcase = ANYTHING > "I can feel your motivation!" (o)
 ```

2) Focus on the bug
Just test the Go, Test line by line / Input new puts/print function to test
```ruby
puts my_question #go
  puts my_question.upcase #GO
  puts my_question == "GO" #false
  if my_question == my_question.upcase
 ```

3) Find a way
```ruby
go => False
GO => True
```

4) Create the code

```ruby
if a == b
> true > run next line
> false > move to next condition
if my_question == my_question.upcase
my_question > upcase? > True
my_question > downcase > False
```
