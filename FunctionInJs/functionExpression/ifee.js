// IIFE(Immediately Invoked Function Expression )
(function(a, b){
    console.log(a**b);
})(4, 3);

const user = (function(){
    let userData ={
        userName: 'Abhi',
        userAge: 23
    }
    function getName(){
        console.log(userData.userName);
    }
    function updateAge(age){
        console.log(userData.userAge + age)
    }

    return {getName: getName, updateAge:updateAge};
})()
console.log(user)
//if a function return something then we can store it in a variable
user.updateAge(45);
user.getName();

function main(){
    return (function(){
        console.log("Hello user");
    })();
}
main();
const result = main();
// console.log(result);

//Creating with closure
var counter = (function(){
    let count = 0;
    return {
        increment: function(){
            count++;
        },
        getCount: function(){
            return count;
        }
    };
})();
counter.increment();
counter.increment();
console.log(counter.getCount());
//assignment
