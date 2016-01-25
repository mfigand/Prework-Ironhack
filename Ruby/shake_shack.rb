class Milkshake
  def initialize
    @base_price = 3
    @ingredients = [ ]
  end
  def add_ingredient (ingredient)
  	@ingredients.push (ingredient)
  end
  def price_of_milkshake
	total_price_of_milkshake = @base_price#Let´s establish what our counter should be before we star adding ingredients into mix
	for ingredient in @ingredients #Add each ingredients price to our total
		total_price_of_milkshake += ingredient.price
	end
  total_price_of_milkshake#Return our total price to whoever called for it
  end
end

class Ingredient
	attr_reader :name, :price
	def initialize (name, price)
		@name = name
		@price = price
	end
end

nizars_milkshake = Milkshake.new
banana = Ingredient.new "Banana", 2
chocolate_chips = Ingredient.new "Chocolate Chips", 1
nizars_milkshake.add_ingredient(banana)
nizars_milkshake.add_ingredient(chocolate_chips)

puts nizars_milkshake.price_of_milkshake
