//ex1. Create a class constructor named Person that should hold information about name, age,  jobTitle and have a function that will return a string “Hello there, My name is (name) and I am (age) years old, and I am a (jobTitle)”
//ex2. Create a class based on the Person class and add some other properties like salary, jobLocation and a function that will call the function that is inside the Person class and add “and I get (salary) every month, and I work in (jobLocation)”
var person = {
    name: "Jack Nickolson",
    age: 34,
    jobTitle: "acountant",
    printMsg: function () {
        return "My name is ".concat(this.name, " and I am ").concat(this.age, " years old, and I am a ").concat(this.jobTitle, ".");
    }
};
document.write(person.printMsg());
