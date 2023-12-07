const arrays = [2, 4, 6, 2, 7, 8];

function main(arrays, fn){
    // const array = [2, 4, 6, 2, 7, 8];
    const customMap = [];
    for(let num of arrays){
        customMap.push(fn(num));
    }
    return customMap;
}
function square(number){
    return number*number;
}
console.log(main(arrays, square))