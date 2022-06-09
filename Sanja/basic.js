//ex1. Create a class constructor named Person that should hold information about name, age,  jobTitle and have a function that will return a string “Hello there, My name is (name) and I am (age) years old, and I am a (jobTitle)”
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//ex2. Create a class based on the Person class and add some other properties like salary, jobLocation and a function that will call the function that is inside the Person class and add “and I get (salary) every month, and I work in (jobLocation)”
// let person:{
//     name: string,
//     age: number,
//     jobTitle: string,
//     printMsg: Function
// } = {
//     name: "Jack Nickolson",
//     age: 34,
//     jobTitle: "acountant",
//     printMsg: function() { 
//         return `My name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}.`
//     } 
// }
// document.write(person.printMsg());
var person = /** @class */ (function () {
    function person(fullName, age, jobTitle) {
        this.fullName = fullName;
        this.age = age;
        this.jobTitle = jobTitle;
        // person.push(this);
    }
    person.prototype.displayName = function () {
        return "Hello there, My name is ".concat(this.fullName, " and I am  ").concat(this.age, "years old, and I am a ").concat(this.jobTitle);
    };
    return person;
}());
var employer = /** @class */ (function (_super) {
    __extends(employer, _super);
    function employer(fullName, age, jobTitle, salary, jobLocation, deppartment) {
        var _this = _super.call(this, fullName, age, jobTitle) || this;
        _this.salary = salary;
        _this.jobLocation = jobLocation;
        _this.deppartment = deppartment;
        return _this;
    }
    employer.prototype.printMore = function () {
        return "".concat(_super.prototype.displayName.call(this), " and I get ").concat(this.salary, " every month, and I work in ").concat(this.jobLocation);
    };
    return employer;
}(person));
var person1 = new person("Jack Nickolson", 34, "acountant");
var person2 = new person("Jenny Nickolson", 31, "developer");
console.log(person1.jobTitle);
document.getElementById("info").innerHTML = person1.displayName();
var employer1 = new employer("Mini Mouse", 23, "cartoon", 2000, "Praterstern 20");
console.log(employer1.jobLocation);
console.log(person2);
console.log(employer1);
