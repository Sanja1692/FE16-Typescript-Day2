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

class person{
    fullName: string;
    age: number;
    jobTitle: string;
    constructor(fullName: string, age: number, jobTitle: string){
        this.fullName = fullName;
        this.age = age;
        this.jobTitle = jobTitle;
        // person.push(this);
    }
    displayName(){
        return `Hello there, My name is ${this.fullName} and I am  ${this.age}years old, and I am a ${this.jobTitle}`
    }
}

class employer extends person{
    salary: number;
    jobLocation: string;    
    deppartment?: string; //optional
    constructor(fullName: string, age: number, jobTitle: string, salary: number, jobLocation: string, deppartment?: string){ // from person and employer too
        super(fullName, age, jobTitle);
        this.salary = salary;
        this.jobLocation = jobLocation;
        this.deppartment = deppartment;
    }
    printMore(): string{
        return `${super.displayName()} and I get ${this.salary} every month, and I work in ${this.jobLocation}`;
    }
}
const person1 = new person("Jack Nickolson", 34,"acountant");
const person2 = new person("Jenny Nickolson", 31,"developer");
console.log(person1.jobTitle);
(document.getElementById("info") as HTMLElement).innerHTML = person1.displayName();

const employer1 = new employer("Mini Mouse", 23, "cartoon", 2000, "Praterstern 20");
console.log(employer1.jobLocation);
console.log(person2);
console.log(employer1);

