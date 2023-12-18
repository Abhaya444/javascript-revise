const inputs = [1, 2, 3, 4, 5];
// console.log(inputs.__proto__.__proto__);

const map1 = new Map();
const map2 = new Map();
map1.set("Ram", 23);
map1.set("Abhaya", 34);
console.log(map1.size);
//clear()
console.log(map1.has("Abhaya"))// if present (true/false)
map1.clear();//clear all data
console.log(map1.size);//size will be zero
console.log(map1.has("Ram")); //false
map1.set("Hari");
map1.set("Komal", 34);
console.log(map1.size);
//delete

map2.set("Abhijit", 34);
map2.set("Abhaya", 34);

console.log(map2.delete("Abhaya"));
console.log(map2.has("Abhaya"));

//entries
const iterator = map1.entries();
console.log(iterator.next().value);
console.log(iterator.next().value);

//forEach()
function logMapEle(value, key, map){
    console.log(`[${key}] = ${value}`);
}
new Map([
    ["Abhi", 43],
    ["Raghu", 56],
    ["fruit", {}]
]).forEach(logMapEle);

//get

console.log(map1);
console.log(map1.get("Komal"));
console.log(map1.get("Hari"));

//groupBy()
const inventory = [
    {name: 'apple', type: 'fruits', quantity: 24},
    {name: 'brinjal', type: 'vegetables', quantity: 3},
    {name: 'cherries', type: 'fruits', quantity: 8},
    {name: 'fish', type: 'meat', quantity: 12},
];

const restock = {restock: true};
const sufficient = {sufficient: false};
const result = Map.groupBy(inventory, ({quantity}) =>
    quantity < 8 ? restock:sufficient,
);
console.log(result.get(restock));

//has()
//keys()

const iterator1 = map1.keys();
console.log(iterator1.next().value);
console.log(iterator1.next().value);


const iterator2 = map1.values();
console.log(iterator2.next().value);
console.log(iterator2.next().value);



