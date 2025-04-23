//complete this code
// class Person {private _name: string;
//   private _age: number;
class person{
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Getter for name
  get name(): string {
    return this.name;
  }

  // Getter for age
  // get age(): number {
  //   return this._age;
  // }

  // Setter for age
  set age(age: number) {
    this.age = age;
  }
}

class Student extends Person { study(): void {
    console.log(`${this.name} is studying`);
  }}

class Teacher extends Person { teach(): void {
    console.log(`${this.name} is teaching`);
  }}
const person = new Person("John", 25);
console.log(person.name);  // Output: John

person.age = 30;  // Using the setter to change the age
console.log(person.age);  // Output: 30

const student = new Student("Alice", 22);
student.study();  // Output: Alice is studying

const teacher = new Teacher("Bob", 40);
teacher.teach(); 

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
