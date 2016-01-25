class Milkshake
  def initialize
    @base_price = 3
    @ingredientes = []
    @milkshake_list = []
  end
  def add_ingredient (ing)
  	@ingredientes.push (ing)
  end
  def add_milkshake_list (milklist)
  	@milkshake_list.push (milklist)
  end
  def price_of_milkshake
	total_price_of_milkshake = @base_price#Let´s establish what our counter should be before we star adding ingredients into mix
	@ingredientes.each do |ingredients|#Add each ingredients price to our total
		total_price_of_milkshake += ingredients.price
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
nizars_milkshake.add_milkshake_list (nizars_milkshake)

puts nizars_milkshake.price_of_milkshake