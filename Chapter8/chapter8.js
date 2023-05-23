// let str_int = "6";
// let int_int = parseInt(str_int);
// console.log("Type of ", int_int, "is", typeof int_int);


// let str_float = "7.6";
// let int_float = parseInt(str_float);
// console.log("Type of", int_float, "is", typeof int_float);

// let str_float = "7.6";
// let float_float = parseFloat(str_float);
// console.log("Type of", float_float, "is", typeof float_float);

// function go(e) {
//     eval(e.value);
//     }

// let array = ["mercedez", "BMW", "Toyota", "Kia", "VW"];
// function Cars(element, index) {
//  console.log("Show cars:", element, "on array position:", index);
// }
// array.forEach(Cars);

// let arr = ["Sechaba", 5, "Sam", 12, true, false, 1, 15 ];
// function checkNumbers(element) {
//  return typeof element === "number";
// }
// let filterArr = arr.filter(checkNumbers);
// console.log(filterArr)


// let number =  [4, 6, 8, 9, 8];
// let newNum = number.map(e => e*2);
// console.log(newNum);

// let number =  [4, 6, 8, 9, 8];
// let newNum = number.map(function(e) {return e*2} ); 
// console.log(newNum);

//exercise 8.2
// let people= ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike",
// "Laurence", "Mike", "Laurence", "Mike"];

// let uniquePeople = people.filter(function(e,i,array)
// {
// console.log (i,e);
// return i === array.indexOf(e);
// });

// console.log (uniquePeople);

//exercise 8.3 
// let number =  [4, 6, 8, 9, 8];
// let newNum = number.map(e => e*2);
// console.log(newNum);

// let number =  [4, 6, 8, 9, 8];
// let newNum = number.map(function(e) {return e*2} ); 
// console.log(newNum);

// let str = "Create a substring";
// let substr1 = str.slice(5);
// let substr2 = str.slice(0,3);
// console.log("1:", substr1);
// console.log("2:", substr2);

//exercise 8.4
// let sentence = "thIs will be capiTalized";

//  function getString (x)
// {

//    x= x.toLowerCase();
//    let capitalLetter = [];

//    let wordArray = x.split(" ");

//     wordArray.forEach(word => {
//         let  capLetter = word.slice(0,1).toUpperCase() + word.slice(1);
//         capitalLetter.push(capLetter);

//     });

//     return capitalLetter.join(" ");
// }

// console.log(getString(sentence));

//exercise 8.5

// let aString = "I love Javascript";

// aString = aString.toLowerCase();

// let vowels = ["a","e", "i", "o" ,"u"];

// vowels.forEach((element, i) => { 

//     aString = aString.replaceAll(element,i);   
// });

// console.log (aString);

// let x = 6.78;
// let y = 5.34;
// console.log("X:", x, "becomes", Math.round(x));
// console.log("Y:", y, "becomes", Math.round(y)); 


//exercise 8.6
// console.log(Math.PI);
// console.log(Math.ceil(5.7));
// console.log(Math.round(5.7));
// console.log(Math.random());
// console.log(Math.floor(Math.random() *11));
// console.log(Math.floor(Math.random() *10) + 1);
// console.log(Math.floor(Math.random() *100)+1);


// let max = 100
// let min = 1

// for (let i = 0; i < 100; i++) {
//     console.log(randomNum(min, max));
// }

// function randomNum (min, max)
// {
//     return Math.floor(Math.random() * (max - min) + min);
// }

let dateInPast = new Date(2009, 10, 15);
console.log (dateInPast);
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"];
let day = dateInPast.getDate();
let month = dateInPast.getMonth();
let year = dateInPast.getFullYear();
let date = `${months[month-1]} ${day} ${year}`

console.log (date);