var a = 10;
var b = 20 ; 
var c = 30;

function print(){
    var a = "Ten";
    var b = "Twenty";

    console.log("********Inside print Function********")
    console.log(a, b, c);
    console.log('*********');

    function innerPrint(){
        var a = "inner10";
        console.log("Inside innerPrint Function");
        console.log(a, b, c);
    }
    innerPrint();
}
console.log(a, b, c);
print();