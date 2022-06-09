//ex1. Create a class constructor named Person that should hold information about name, age,  jobTitle and have a function that will return a string “Hello there, My name is (name) and I am (age) years old, and I am a (jobTitle)”

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

let person:{
    name: string,
    age: number,
    jobTitle: string,
    printMsg: Function
} = {
    name: "Jack Nickolson",
    age: 34,
    jobTitle: "acountant",
    printMsg: function() { 
        return `My name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}.`
    } 
}
document.write(person.printMsg());
