// const people = [{ name: "Max" }, { name: "Jack" }, { name: "Marry" }];

// Using find() in the ES6
// function getName(name) {
//   return people.find((person) => person.name === name);
// }
// console.log(getName("Max"));

//Using forEach to loop through entire array and create an alert box for each
// const showEachOne = (name) => people.forEach((person) => alert(person.name));
// console.log(showEachOne());

// const filterPeople = () => people.filter((n) => n.name == "Jack");
// console.log(filterPeople());

// const products = [
//   { name: "Milk", price: 15 },
//   { name: "Water", price: 9 },
//   { name: "Bread", price: 5 },
// ];

//Using map() method to increase price of each  product by 2
//Unlike forEach(), map() creates a new array where it stores the new data
//const changeProducts = () =>
//   products.map((product) => ({ ...product, price: product.price + 2 }));
// console.log(changeProducts());

// let a = ["one", "two", "three"].find((elm) => elm == "four");
// console.log(a);

// const newArray = [1, 2, 3].map(() => true);

//ES6 CRASH COURSE
// const person = {
//   name: "Ngesa",
//   walk() {
//     console.log(this);
//   },
//   talk() {},
// };

//Use dot notation when you know ahead of time what property/method you're going to access
// person.talk();
// person.name = "";

//Use bracketes '[]' when you dont know what property/method you're going to access

// const targetMember = "name";
// person[targetMember.value] = "John";

// person.walk(); //calling a function as a method using 'this'

// const walk = person.walk;
// console.log(walk);

//Binding 'this'
// const walk = person.walk.bind(person); //walk over here is an object
// walk(); //calling a function as a standalone/outside the function using 'this'

//ARROW FUNCTIONS
//Old Method of using functions
// const square = function(number){
//   return number*number;
// }

// const square = (number) => number * number; Same code but Arrow Functions in ES6
// console.log(square(5));

// const jobs = [
//   { id: 1, isActive: true },
//   { id: 2, isActive: true },
//   { id: 3, isActive: false },
// ];

// const activeJobs = jobs.filter(function (job) {
//   return job.isActive;
// }); //old JS

// const activeJobs = jobs.filter((job) => job.isActive);
// console.log(activeJobs);

// const colors = ["red", "blue", "green"];

// const items = colors.map((color) => `<li>${color}</li>`);
// console.log(items);

//OBJECT DESTRUCTURING
// const address = {
//   street: "dsfet",
//   city: "",
//   country: "",
// };
//Old JS
// const street = address.street;
// const city = address.city;

//ES6
// const { street, city } = address;
// console.log(street);

//SPREAD OPERATOR
// const first = [1, 2, 3];
// const second = [3, 4, 5];

//Spread operator on Array
// const combine = first.concat(second);
//ES6
// const combine = [...first, "fear", ...second];
// console.log(combine);

//Spread operator on Object
// const person = { name: "Ngesa" };
// const second = { age: 22 };

// const combine = { ...person, ...second, location: "Nairobi" };
// console.log(combine);
// const clone = { ...person }; //Cloning can occur too
// console.log(clone);

//CLASSES
// class Color {
//   constructor(r, g, b) {
//     // Assign the RGB values as a property of `this`.
//     this.values = [r, g, b];
//   }
// }

// const red = new Color(255, 0, 0);
// console.log(red);

class Person {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log("walk");
  }
}
// const person = new Person("Ngesa");
// person.name;

//INHERITANCE
//We are inheritting from the class above
class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }
  teach() {
    console.log("teach");
  }
}
const teacher = new Teacher("Ngesa", "BScIT");
teacher.teach;
