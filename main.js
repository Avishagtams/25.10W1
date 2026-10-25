// Exercise 1

function Phone(brand,model){
    this.brand=brand;
    this.model=model;

    this.details=function (){
        console.log(`Phone: [${this.brand}] ,[${this.model}]`);
    }
}
console.log("-------Exercise 1--------")
const phone1=new Phone("Samsung","S22");
phone1.details();



// Exercise 2
function Rectangel(width,height){
    this.width=width;
    this.height=height;

    this.area=function (){
        return width*height;
    }
}
console.log("-------Exercise 2--------")
const rec1=new Rectangel(5,10);
console.log("Area:"+ rec1.area())


// Exercise 3

function BankAccount(owner,balance){
    this.owner=owner;
    this.balance=balance;

    this.deposit=function (amount){
        this.balance+=amount;
    }
    this.withdraw=function (amount){
        if(balance>=amount){
            this.balance-=amount;
        }
        else{
            console.log("Sorry you dont have enough moany")
        }
       
    }
    this.checkBalance=function (){
        console.log("Balance: "+this.balance)
    }

}


console.log("-------Exercise 3--------")
const bank1=new BankAccount("Avishag",100);
bank1.checkBalance();
bank1.deposit(200);
bank1.checkBalance();
bank1.withdraw(150);
bank1.checkBalance();
bank1.withdraw(100);
bank1.checkBalance();


// Exercise 4
function Animal(name) {
    this.name = name;
}

Animal.prototype.makeAsound = function() {
    console.log(this.name + "makes a sound");
};

function Dog(name) {
    this.name = name;
}

Dog.prototype = Object.create(Animal.prototype);


Dog.prototype.bark = function() {
    console.log(this.name + "barks");
};

console.log("-------Exercise 4--------");
const dog1 = new Dog("shugi ");
dog1.makeAsound();
dog1.bark();  


// Exercise 5
function Vehicle(type) {
    this.type = type;
}

Vehicle.prototype.describe = function() {
    console.log("This is a "+this.type);
};

function Car(brand,type) {
    this.type=type;
    this.brand = brand;
}

Car.prototype = Object.create(Vehicle.prototype);


Car.prototype.info = function() {
    console.log("This is a "+this.brand+ " "+this.type);
};

console.log("-------Exercise 5--------");
const car1 = new Car("BMW","car");
car1.describe();
car1.info();       


// Exercise 6

function Shape(){}
Shape.prototype.area=function(){
    return 0;
}

function Circle(radius){
    this.radius=radius;
}
Circle.prototype=Object.create(Shape.prototype);

Circle.prototype.area=function(){
    return 3.14 * this.radius * this.radius;
}

function Square(side){
    this.side=side;
}
Square.prototype=Object.create(Shape.prototype);
Square.prototype.area=function(){
    return this.side*this.side;
}


console.log("-------Exercise 6--------");
const c=new Circle(3);
console.log("Area Circle: "+c.area());
const s = new Square(4);
console.log("Area Square: "+s.area());


// Exercise 7

class Book{
    constructor(title,author){
        this.title=title;
        this.author=author;
    }
    info(){
        console.log(this.title + " by " + this.author);
    }

}
console.log("-------Exercise 7--------");
const b = new Book("nameBook","Avi");
b.info();


// Exercise 8
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, I'm ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, school) {
        super(name); 
        this.school = school;
    }

    study() {
        console.log(`${this.name} is studying at ${this.school}`);
    }
}

const student1 = new Student("Alice", "Oxford");
console.log("-------Exercise 8--------");

student1.greet(); 
student1.study(); 


// Exercise 9
class Employee {
    #salary;

    constructor(salary) {
        this.#salary = salary; 
    }

    getSalary() {
        return this.#salary;
    }

    work() {
        console.log("Employee is working");
    }
}

class Manager extends Employee {
    constructor(salary) {
        super(salary); 
    }

    work() {
        console.log("Manager is managing");
    }
}

console.log("-------Exercise 9--------");

const emp = new Employee(4000);
console.log(emp.getSalary()); 
emp.work();                 

const mgr = new Manager(5000);
console.log(mgr.getSalary()); 
mgr.work();                   





