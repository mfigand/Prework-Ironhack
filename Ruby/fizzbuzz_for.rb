numbers = (1..100)

for item in numbers

  if (item % 3 == 0 && item % 5 == 0)
   puts "fizzbuzz"
  elsif (item % 3 == 0)
   puts "fizz"
  elsif (item % 5 == 0)
   puts "buzz"
  else 
   puts item
  end

end