let a = "Global";

// function outerPrint(){
//     let b = "OuterPrint";

//     function innerPrint(){
//         let c= "innerPrint";
//         return `${a} -> ${b} -> ${c}`;
//     }
//     const show = innerPrint();
//     console.log(show);
// }
// outerPrint();

function outerPrint(){
    let b = "OuterPrint";

    function innerPrint(){
        let c = "innerPrint";
        return `${a} -> ${b} -> ${c}`;
    }
    return innerPrint();
}
const show = outerPrint();
console.log(show);