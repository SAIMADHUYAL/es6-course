class Person{

    constructor(name,age,children){

        this.name = name;
        this.age = age;
        this.children = children;
    }
    speak(){
        console.log(`My name is ${this.name} and my age is ${this.age} years old`);
    }
    birth(child){

        this.children.push(child);
        return this.children;
    }
};

const bill = new Person('Sai',26,['shan','stephn']);
bill.speak();
bill.birth(`Jess`);
console.log(bill.children);