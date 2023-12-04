//HOF is a function which accepting function as an argument
//Or a function which returns function as an output 

const inputs = [1, 2, 3, 3, 4, 5, 6, 7, 19];

function square(input){
    const squared = [];
    for(let num of input){
        squared.push(num * num);
    }
    return squared;
}
console.log(square(inputs));