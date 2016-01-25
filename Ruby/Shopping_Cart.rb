class ShoppingCart
	def initialize
		@base_price = 0
		@items = []
	end
	def add_item (item)
  	@items.push (item)
    end
    def price_of_my_cart
	total_price_of_my_cart = @base_price
	for item in @items
		total_price_of_my_cart += item.price
	end
  total_price_of_my_cart
  end
end

class Item
	attr_reader :name, :price
	def initialize (name, price)
		@name = name
		@price = price
	end
	def price
		price = price
	end
end

class Houseware < Item
	def price
		if (price > 100)
			price = price * 0.95
		end
	end
end

class Fruit < Item
	def price
		t = Time.now.strftime("%a")
		if (t == "Sat" || t == "Sun")
	     price = price * 0.9
        end
	end
end

my_cart = ShoppingCart.new

banana = Fruit.new "Banana", 10
orange_juice = Fruit.new "Orange Juice", 10
rice = Item.new "Rice", 1
vacuum_cleaner = Houseware.new "Vacuum Cleaner", 150
anchovies = Item.new "Anchovies", 2

my_cart.add_item(banana)
my_cart.add_item(orange_juice)

puts my_cart.price_of_my_cart

