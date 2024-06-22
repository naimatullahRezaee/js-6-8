// const person = {
//   fname: "ali",
//   lname: "karimi",
//   age: 30,

//   greeting() {
//     console.log("hello world");
//   },
// };

// person.fname = "marwa";

// person.gender = "female";

// person.greeting = function () {
//   console.log("hello world");
// };

// delete person.age;

// console.log(person.fname);

function Person(first, last, age) {
  this.fname = first;
  this.lname = last;
  this.age = age;
}
Person.prototype.greeting = function () {
  return ` my name is ${person1.fname} ${this.lname} and my age is ${this.age}  `;
};

Person.prototype.gender = "male";

const person1 = new Person("ali", "karimi", 40);

const person2 = new Person("marwa", "ahmadi", 14);

console.log(person2.gender);
