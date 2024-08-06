const people = [{ name: "Max" }, { name: "Jack" }, { name: "Marry" }];

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
