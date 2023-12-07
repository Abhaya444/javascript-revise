// //HOF is a function which accepting function as an argument
// //Or a function which returns function as an output 

const inputs = [1, 2, 3, 3, 4, 5, 6, 7, 19];


//1st approach


// function square(input){
//     const squared = [];
//     for(let num of input){
//         squared.push(num * num);
//     }
//     return squared;
// }
// console.log(square(inputs));

// function cubic(input){
//     const cubes = [];
//     for(let num of inputs){
//         cubes.push(num*num*num)
//     }
//     return cubes;
// }
// const result = cubic(inputs);
// console.log(result);

//2nd approach

function operation(input, fn){
    const output = [];
    for(let num of input){
        output.push(fn(num));
    }
    return output;
}
function square(number){
    return number*number;
}
function cube(number){
    return number*number*number;
}
console.log(operation(inputs, square));
console.log(operation(inputs, cube));