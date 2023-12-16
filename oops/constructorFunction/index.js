function movie(title, year) {
  const movieObj = {
    title: title,
    year: year,
    getDetails() {
      console.log(
        `Title: ${this.title}
            Year: ${this.year}`
      );
    },
  };
  return movieObj;

}
const movie1 = movie("The Avengers", 2022);
// const movie2 = movie("Avatar", 2015);
// console.log(movie2)
console.log(movie1);
 
movie1.getDetails();

//constructor function
function Movie(title, year){
    //properties
    this.title = title;
    this.year  = year;

    this.getDetails = function(){
        console.log(
            `Title: ${this.title}
             Year: ${this.year}`
          );
    }
    
}
//new keyword
const movie2 = new Movie('Avatar', 2022);
console.log(movie2);
movie2.getDetails();
