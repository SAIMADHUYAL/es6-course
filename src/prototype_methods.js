// const person = {
//     name : 'Sai',
//     age : 26
// };

// console.log(person.name);

function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.speak = function(){
    console.log(`Hi my Name is ${this.name} and my age is ${this.age} years old.`);
}

const bill = new Person('Sai',26);
bill.speak();
console.log(bill);