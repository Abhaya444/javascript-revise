const inputs = [1, 3, 4,5, 6, 8, ];

const squaredArray = inputs.map((num) => num*num);
// console.log(squaredArray);

let fruit = ["banana", "apple", "mango"];
let mangoArray = fruit.map((item,ind) =>{
    return {[ind] : item.length};
})

// console.log(mangoArray);
// let data = [2, 3, 4];
// let newData = data.map();
// console.log(newData);
//reduce

//reduce(redFn, initial value); 

// function redFn(accumelator, currentValue, currentIndex, arr)

const sum = inputs.reduce((total, num) => {
    return total + num;
}, 0);

console.log(sum);