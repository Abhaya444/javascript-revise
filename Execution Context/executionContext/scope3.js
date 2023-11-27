var a= 10;
let b = 20;

console.log(a, b);

//Redeclaration of variables is only possible with the var keyword
//Otherwise it will through an error

function outer(){
    let x = 10;
    if(true){
        let y = 20;
        let z = 30;
        console.log(x + y + z);

    }
    console.log(x + y + z);
}
outer();