const Students = [
    "Ram",
    "Sita",
    "Hari",
    "Visakha"
];
for(let i = 0; i<Students.length; i++){
    console.log(
        `Roll No ${i+1}:- ${Students[i]}`
    )
}
// for-in loop
//if you want to print index no then you can use for-in loop
for(i in Students){
    console.log(
        `Roll No ${Number(i)+1}:- ${Students[i]}`
    )
}
// for-of loop
//if you want to print the elements you can use for-of loop
for(let student of Students){
    console.log(student)
}
