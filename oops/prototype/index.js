function Movie(title){
    this.title = title;
}
const movie1 = new Movie("The Avengers");

movie1.year = 2012;
console.log(movie1);
console.log(movie1, __proto__);
const movie2 = new Movie("Avatar");
console.log(movie2);
console.log(movie2, __proto__.__proto__);

//prototype comparision
function Game(name, platform){
    this.name = name;
    this.platform  = platform;

}
const fifa = new Game("FIFA 23", "PlayStation");
console.log(fifa, __proto__ ===Game.prototype);
console.log(fifa, __proto__.__proto__ ===Object.prototype);

// second
function galaxy(name){
    this.name = name;
}
const milkyway = new galaxy('Milky Way');
console.log(milkyway.__proto__.__proto__.__proto__);
/* Every object in JS inherits from another one, forming a prototype chain. The Milky way object's prototype is Galaxy.prototype, whose prototype is Object.prototype.The top of the chain is Object.prototype , whose prototype is null , hence the last log prints null.*/



//Prototype Chain
function Car(name, color){
    this.name = name;
    this.color = color;
    // this.getDetails = function(){
    //     console.log(`Name: ${this.name}\nColor: ${this.color}`);
    // }

}
Car.prototype.getDetails = function(){
      console.log(`Name: ${this.name}\nColor: ${this.color}`);

}
const car1 = new Car('BMW', 'Brown');
const car2 = new Car('Mercedess', 'Black')
console.log(car1);
console.log(car2);

//Prototype Updation
function Person(name){
    this.name = name;
}
Person.prototype.age = 30;
const john = new Person("John");
john.__proto__.age = 40;
console.log(john.age);
console.log(Person.prototype.age);
