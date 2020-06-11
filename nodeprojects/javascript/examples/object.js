//1. declaring an object literal
// const car = {
//     name: "maruti",
//     color: "black",
//     start: function()  {
//         // console.log("Engine started Welcome to "+  this.name)}
//         console.log(this)}
// }
// car.start()
// console.log(car.start())
// console.log(car.color)


//2.using constructor function
function Person(first, last, age, gender, interests) {
  this.name = {
     first : first,
     last : last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  console.log(this)
  this.details =function()  {
      console.log(this)
      return this.innerDetails = function() {
          console.log(this)
      }
    console.log("name:  " + this.name.first + "   " + this.name.last + "\nage:    " + this.age + "\ninterests: "  + this.interests[0] + ", " + this.interests[1] + '.');
  };
  this.hello = function() {
    alert("hello" + this.name.first );
  };
}

 var person1 = new Person('person1', 'person1', 23, 'male', ['music', 'dance']);

 console.log(person1.__proto__)
// person1.details()()

// console.log(person1.age)
// console.log(person1['age'])

// console.log(person1.interests)
// console.log(person1.interests[1])
// console.log("\n")
// console.log(person1.details())

//3.Object() constructor

 //let person1 = new Object();

// person1.name = "person1"
// person1.age = 23
// person1.hell0 = function(){alert("hello "+ person1.name)};

// console.log(person1.age)

//person1.hell0()

//4. create() method IE 8 don't support  it 
// let person2 = Object.create(person1)
// console.log(person2.age)

//5.prototype template object for inheritance of methods and properties
// let myString = "This  is a new string"
// console.log(myString.split(" "))

 let person2 = Object.create(person1)

 //console.log(person2.__proto__)
// console.log(person1.constructor)
// console.log(person2.constructor.name)

// let person3 = new person1.constructor("fname","lname", 55, ['art', 'gallery '])

// console.log(person3.age)

//6.modifying the prototype property
    // Person.prototype.newMethod = function() {alert("this is modified prototype method")};

    // person2.newMethod()

//7.Inheritance
// function Person(first, last, age, gender, interests) {
//     this.name = {
//        first : first,
//        last : last
//     };
//     this.age = age;
//     this.gender = gender;
//     this.interests = interests;
//     this.details = function() {
//       alert("name:  " + this.name.first + "   " + this.name.last + "\nage:    " + this.age + "\ninterests: "  + this.interests[0] + ", " + this.interests[1] + '.');
//     };
//     this.hello = function() {
//       alert("hello" + this.name.first );
//     };
//   }

//   var person1 = new Person('person1', 'person1', 23, 'male', ['music', 'dance']);

//   function Teacher(first, last, age, gender, interests, subject){
//       Person.call(this, first, last, age, interests) //call a fn defined elsewhere but in current context

//       this.gender = gender;
//       this.subject = subject;
//   }

//   let teacher1 = new Teacher('teacherfname', 'teacherlname', 31, 'male', ['football', 'cookery'], 'mathematics');

//   console.log(teacher1.name)
//   console.log(teacher1.gender)

//8.ECMA script 2015 class syntax

// class Person {
//     constructor(first, last, age, gender, interests) {
//       this.name = {
//         first,
//         last
//       };
//       this.age = age;
//       this.gender = gender;
//       this.interests = interests;
//     }
  
//     greeting() {
//       console.log("hello I am " + this.name.first);
//     };
// }

// let abc = new Person('abc', 'def', 25, 'male', ['swimming']);
// //abc.greeting()

// //9.inheritance
// class Teacher extends Person{
//     constructor(first, last, age, gender, interests,subject, grade){
//         super(first, last, age, gender, interests); //for teacher  this initializaton is done by Parent constructor. as teacher is a subclass
//         this._subject = subject;
//         this.grade = grade;
//     }

//     get subject(){
//         return this._subject;
//     }

//     set subject(newSubject){
//         this._subject = newSubject;
//     }
    
// }

// let teacher1 = new Teacher('teacherfname', 'teacherlname', 31, 'male', ['football', 'cookery'], 'mathematics');

// console.log(teacher1.greeting())
// console.log(teacher1.subject)

// teacher1.subject = "physics"

// console.log(teacher1.subject)
