const movie = {
    title: "The Avengers",
    year: 2022,
    cast: {
        leadRole: "Abhaya",
        others: "Marrie and Jack"
    },
    getDetails: function(){
        console.log(`TItle: ${this.title}\nYear: ${this.year}\nCast: ${this.cast}`);
    },
    getMovieDetails: function (detail){
        console.log(movie[detail]);
    }
}
console.log(movie.title);
movie.getDetails();
const detail = "year";
movie.getMovieDetails(detail);

const person = {
    name: "John",
    age: 30,
    occupation: "Engineer",
};
const anotherPerson = person;
anotherPerson.name = "Jane";

console.log(person.name);