class Animal
  def initialize(name)
    @name = name
  end

  def describe
    puts "This animal is #{@name}"
  end
end

class Human < Animal
  def initialize(name, salary)
    super(name)
    @salary = salary
  end
  def describe_with_salary
    puts "This human is #{@name} and its salary is #{@salary}"
  end
end

human = Human.new "Johnny Appleseed", 12000

human.describe
human.describe_with_salary