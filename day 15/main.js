const students = {
  id: 123,
  name: "Ali",
  lastname: "ahmadi",
  age: 40,
  gender: false,

  favorite: ["music", "conding", "movie", "football"],
  address: {
    village: "taimani",
    city: "kabul",
  },

  move: function () {
    console.log(
      `your name is ${this.name} \n and your last name is ${this.lastname}`
    );
  },
};

// console.log(students.favorite[2]);
// console.log(students.address["village"]);

// console.log(students.age);
// console.log(students.name);
// console.log(students["gender"]);

// students = [100, "ali", "ahmadi", 40, "male"];

// for (st in students) {
//   console.log(`${st}: ${students[st]}`);
// }

console.log(students.move());
