num = (1..100)
result = ""

for item in num
  
  if (item % 3 == 0)
   result = result + "fizz"
  end
puts result
end