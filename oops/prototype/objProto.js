
//Object.create()

const person = {
    isHuman: false,
    height:  54,
    printIntroduction: function(){
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    },
}
const me = Object.create(person);
me.name = "Abhaya";
me.isHuman = true;


me.printIntroduction()


// Object.assign()


