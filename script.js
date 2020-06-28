/*var john = {
  name: "John",
  yearOfBirth: 1990,
  job: "teacher",


var Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person.prototype.calculateAge = function () {
  console.log(2016 - this.yearOfBirth);
};
Person.prototype.lastName = "Smith";
var john = new Person("John", 1990, "teacher");
var jane = new Person("Jane", 1969, "designer");
var mark = new Person("Mark", 1948, "retired");

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);


var personProto = {
  calculateAge: function () {
    console.log(2016 - this.yearOfBirth);
  },
};
var john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1990;
john.job = "teacher";

john.calculateAge();

var jane = Object.create(personProto, {
  name: { value: "Jane" },
  yearOfBirth: { value: 1969 },
  job: { value: "designer" },
});
jane.calculateAge();
*/

/*var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}
function isFullAge(el) {
  return el >= 18;
}
function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - 0.67 * el);
  } else {
    return -1;
  }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(years, isFullAge);
var rates = arrayCalc(years, maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(rates);*/

/*function interviewQuestion(job) {
  if (job === "designer") {
    return function (name) {
      console.log(name + ", can you please explain what UX design is?");
    };
  } else if (job === "teacher") {
    return function (name) {
      console.log("what subject do you teach," + name + "?");
    };
  } else {
    return function (name) {
      console.log("Hello" + name + ",what do you do?");
    };
  }
}

var teacherQuestion = interviewQuestion("teacher");
teacherQuestion("Megha");
var designerQuestion = interviewQuestion("designer");
designerQuestion("Megha");

interviewQuestion("teacher")("Mark");*/

(function (goodluck) {
  var score = Math.random() * 10;
  console.log(score);
})(7);

var answer = prompt("hello");
