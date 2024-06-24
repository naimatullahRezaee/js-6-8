function Student(fname, grade, address) {
  this.name = fname;
  this.grade = grade;
  this.address = address;
}

Student.prototype.getDetails = function () {
  return `my name is : ${this.name} and I live in ${this.address}`;
};

const student1 = new Student("Ali", 10, "kabul");
const student2 = new Student("Marwa", 10, "Bamyan");

console.log(student1.getDetails());
console.log(student2.getDetails());
