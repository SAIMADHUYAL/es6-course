const names = ['John','Bill','Sam'];
const moreName = ['William','Paul','Mike'];

//console.log(...names);

// let allNames = [];
// allNames.allNames.concat(names);
// allNames.push('Gio');
// allNames = allNames.concat(moreNames);

// console.log(allNames);

const allNames = [...names,'Gio',...moreName];
console.log(...allNames);