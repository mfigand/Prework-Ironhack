def solve_cipher(input,shift)
characters = input.split("")
shift = -3
 for elements in characters
 	if elements == " "
 		print " "
 	elsif elements.ord <= 97
 		item = (elements.ord + 25).chr
 		print item
 	elsif item = (elements.ord + shift).chr
		print item
	end
 end
end

solve_cipher("p| uhdo qdph lv grqdog gxfn","by_default=-3")