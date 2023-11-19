const inputs = [42,54,81,65,24,85,78,64,25,48,46,54,10,12];

const evenNum = [];

for(let i of inputs){
    if(i % 2 !== 0){
        continue;
    }
    evenNum.push(i)

    if(evenNum.length === 5){
        break;
    }
    console.log(evenNum)
}
console.log(evenNum)

//prime number array
const arr = [];
let num  = 1;
do{
    num++;
    if(checkPrime(num) && arr.push(num) >=10){
        break;
    }
}while(true);
console.log(arr);