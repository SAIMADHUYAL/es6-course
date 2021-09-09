

// function printName(){
//     var name =  "Sai";
//     console.log(name);
// }
// console.log(name);

// printName();

// Using let
// var name = "Sai";
// if(name == "Sai"){
//     let fullName = "Sai Madhu";
    
// }
// console.log(fullName);

//using const
// if a value doesnt need to be updated later in the block 'const' can be used.

// var name= 'h';
// if(name == 'h'){
//     let fullName = "Hello world";
//     const age = 21;

// }
// console.log(age);

//This we cant change the object of a person because of 'const'
const person = {
    name : 'sai',
    gender : 'male'
};
// with 'const' we can change the peoperties of an object.
person.name = 'Madhu';
person.name = 'Sai Madhu';
console.log(person.name);
console.log(person.gender);


//This will update the person properties.
// let person = {
//     name: 'Sai',
//     gender : 'male'
// };
// console.log(person.name);
// console.log(person.gender);