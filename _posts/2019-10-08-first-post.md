---
title: "[2/97] Ruby - Basic"
date: 2017-10-07 
categories: studying
---


1. String Sentence >> Array

There are three ways you can define an array of strings without typing quotes

'''%w[Hey Harry Poter] #=> ["Hey", "Harry", "Poter"]
%w(Hey Harry Poter) #=> ["Hey", "Harry", "Poter"]
%w{Hey Harry Poter} #=> ["Hey", "Harry", "Poter"]'''


2. Experiments

'''
def get_rid_of_surrounding_whitespaces(a_string)
  # TODO: return a copy of the string with leading and trailing whitespaces removed
  # example: get_rid_of_surrounding_whitespaces("  hey yo  ") => "hey yo"
  a_string.strip
end

def belongs_to?(a_string, a_word)
  # TODO: return true if a_string contains a_word
  # example: belongs_to?("hey jude", "jude") => true
  a_string.include? a_word
end

def replace(initial_string, old_letter, new_letter)
  # TODO: return a copy of the string with the new letter replacing the old one
  # example: replace("casanova", "a", "o") => "cosonovo"
  return initial_string.gsub(old_letter, new_letter)
end

def exactly_divide(an_integer, a_divider)
  # TODO: return division of an_integer by a_divider (computing the floating division, NOT the euclidean one)
  # example: exactly_divide(13, 4) => 3.25
  return an_integer / a_divider.to_f
end

def divisible_by_two?(an_integer)
  # TODO: return true if an_integer is divisible by 2
  # example: divisible_by_two?(6) => true
  return an_integer.even?
end

def random_subset(an_array, sample_size)
  # TODO: return a random subset of an_array with size sample_size
  # example: random_subset(('a'..'z').to_a, 4) => ["u", "q", "l", "t"]
  return an_array.sample(sample_size)
end

def randomize(an_array)
  # TODO: return a randomized copy of an_array
  # example: randomize([1, 2, 3, 4]) => [2, 1, 4, 3]
  return an_array.shuffle
end

def ascending_order(an_array)
  # TODO: return a copy of an_array with elements in ascending order
  # example: ascending_order([7, 3, 1, 6, 9]) => [1, 3, 6, 7, 9]
  return an_array.sort
end
'''



3. 7 most used ruby built-in objects?
'''
String like "Hello World"

Integer like 12

Float like 3.14

Array like ["Hello World", 12, 3.14]

TrueClass like true

FalseClass like false

Range like (1..100)'''


4. Method <-> Use 

Parameter > inside of Method 
Object > assign to the Parameter 

'''
require 'date'

def age_in_days(day, month, year)
  # TODO: return the age expressed in days given the day, month, and year of birth
  (Date.today - Date.new(year, month, day)).to_i
end
'''

'''
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
'''



5. Complicated

Understand 
condition in Method 
Use 'Until a == b' means if it is True do Return / if not, go to next line


Method 

'''
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
'''

Use 

'''
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
'''


6. Learn Debugging

1) Which condition the bug occurs? 
Be specific
  Downcase = go > quit (x)
  Downcase = ? > "" (o)
  Downcase = ?=x > "" (o)
  upcase = GO > quit (o)
  upcase = ANYTHING > "I can feel your motivation!" (o)
  
2) Focus on the bug 
Just test the Go
Test line by line / Input new puts/print function to test
  # puts my_question #go
  # puts my_question.upcase #GO
  # puts my_question == "GO" #false
  # if my_question == my_question.upcase
 
3) Find a way
go => False
GO => True

4) Create the code
if a == b
> true > run next line
> false > move to next condition

if my_question == my_question.upcase
my_question > upcase? > True
my_question > downcase > False
