//Scope in Js

//Global:- Global  variables can be axxessible anywhere in the program
var varNum = 10;
let letNum = 20;
const constNum = 30;

//functional scope:- 
//Block Scope:- defined within a curly braces{}

{
var varNum = 10;
let letNum = 20;
const constNum = 30;
}
//functional scope
function print() {
  var varLocal = 10;
  let letLocal = 20;
  const constLocal = 30;

  console.log(varLocal, letLocal, constLocal);
  console.log(varNum, letNum, constNum);

}
console.log(varNum, letNum, constNum);
// console.log(varLocal, letLocal, constLocal);

print();
