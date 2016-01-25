puts "write a sentence"
sentence = gets.chomp

sentence.include? "!"

words = sentence.split(" ")

words_order = words.sort

print words_order