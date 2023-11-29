function cart(){
    let items = 0;
    return {
        adddItem: function(){
            items++;
        },
        getItem: function(){
            return items;
        }
    };
}
const closure = cart();
closure.adddItem();
closure.adddItem();
closure.adddItem();
console.log(closure.getItem());

var a= 1;
function b(){
    a = 10;
    return;
    function a(){
        console.log(a);
    }
}
b();
console.log(a);