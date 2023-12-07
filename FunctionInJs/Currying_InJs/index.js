// //cURRYING IN JS
// function power(a, b, c){
//     return a**b**c;
// }
// console.log(power(2,1,3));
function power(b){
    return function(a){
        return a**b;
    }
}
const square = power(2);
console.log(square());
console.log(square(3));
const cube = power(3);
console.log(cube(6))