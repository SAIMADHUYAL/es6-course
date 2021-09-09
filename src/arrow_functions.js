const integers = [1,2,3]; // map functionality.

// const updatedIntegers = integers.map(function(number){
//    return number += 1;
// });

// console.log(updatedIntegers);


//Arrow Functions.

//const updatedIntegers = integers.map(number => "bob");
// const updatedIntegers = integers.map(() => "bob");
// console.log(updatedIntegers);

const ages = [23, 42, 6, 18];
const adults = ages.filter((age) => age > 18);

console.log(adults);   