puts "what is the source file?"
source_file = gets.chomp
#ask and save the chosen source

puts "How you want to name the destination file?"
destination_file = gets.chomp
#ask and save the name of the destination file

source_file_contents = IO.read(source_file)
#define variable of contents

IO.write(destination_file, source_file_contents)
#create the new file
	