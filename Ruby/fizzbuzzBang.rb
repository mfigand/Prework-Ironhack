numbers = (1..100)
begin1 = [11,13,14,16,17,19]

for item in numbers
  if (item == 1 || item == 11 || item == 13 || item == 14 || item == 16 || item == 17 || item == 19)
   puts "Bang" 
  elsif (item == 15)
   puts "fizzbuzzBang"
  elsif (item == 12 || item == 18)
   puts "fizzBang"
  elsif (item == 10 || item == 100)
   puts "buzzBang"
  elsif (item % 3 == 0 && item % 5 == 0)
   puts "fizzbuzz"
  elsif (item % 3 == 0)
   puts "fizz"
  elsif (item % 5 == 0)
   puts "buzz"
  else 
   puts item
  end

end