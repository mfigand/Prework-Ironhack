class Animal
  def initialize(name, price)
    @name = name
    @price = price
  end
  def describe
    puts "This animal's name is #{@name} & cost #{@price}"
  end
end

class Dog < Animal
  def initialize(name, salary)
    super(name)
    @salary = salary
  end
  def describe_with_salary
    puts "This dog #{@name} erns #{@salary} of salary"
  end
end

dog = Dog.new "Winston", 10

dog.describe
#dog.describe_with_salary
