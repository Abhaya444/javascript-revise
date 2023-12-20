const obj = {
    a: 1,
    b: 2,
    c: ['o', 'B', 'J'],
    d: {value: 'val'},
}

// Binding Pattern
const {a, c} = obj;
// console.log(a);
// console.log(c);

const {a : a1} = obj;
console.log(a1);
// console.log(a);

// Assignment Pattern
let b;
({b:b} = obj);
console.log(b);


//question
let obj1 = {
    firstName: "John",
    lastName: "Doe"
};
let {firstName: fn, lastName: ln} = obj;
console.log(firstName);//not defined

let obj2 = {
    name: "John",
    country: "India",
    age: 32,
};
let name;
({name} = obj2);
let {country: c2, age:a2} = obj2;
obj2.country = "Canada";
console.log(name, c2, a2);


