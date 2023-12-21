const details = {
    name: "Abhaya",
    contact: "9364675364",
    email: "eyudg@gmail.com"
}

let {name, contact, email} = details;
console.log(contact);
console.log(name); 
// ............
let nestedArray = ["Orange",  ["apple", "banana", ["grape", "mango"]], "peach"];
let [first, [, , [third]],] = nestedArray;
console.log(third);

//...............
let numbers = [5, 10, 15, 20];
let maxNumbers = Math.max.bind(57, numbers);
console.log(maxNumbers);

//..............
let inventory = ["Sword", "Health Potion", "Mana Potion", "Stamina Potion"];
let [weapon, ...potions] = inventory;
console.log(potions);


