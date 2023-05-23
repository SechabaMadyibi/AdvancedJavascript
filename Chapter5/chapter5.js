


//exercise 5.4 
// let myTable = [];
// let rows = Number(prompt("Enter number of rows"));
// let columns = Number(prompt("Enter number of columns"));

// let counter = 0; 
// for (i =0 ; i < rows ; i ++)
// {
//     let table = [];
// for (let j = 0; j < columns ; j++)
//     {
//         counter ++;
//         table.push(counter);
//     }
// myTable.push(table);
// }
// console.log (myTable);

//exercise 5.5

// let grid = [];
// let cells = 64;
// let counter = 0;
// let row;

// for (let i = 0; i < cells + 1 ; i++)
// {
//     if (counter % 8 == 0)
//     {
//         if (row !=undefined )
//         {
//             grid.push (row)
//         }
//         row  = [];
//     }
//     counter ++;
//     let table = counter
//     row.push (table);
// }
// console.log(grid);
// console.table(grid);

/*let myArray = [];
for (let i =1 ; i<=10; i++)
{
    myArray.push(i);
}
console.log (myArray);
for (let j = 0 ; j < myArray.length; j++)
{
    console.log(myArray [j]);
}

for (let val of myArray)
{
    console.log (val);
}*/

//Exercise 5.6
// const myArray = [];
// for (let x = 0; x < 10; x++) {
//  myArray.push(x + 1);
// }
// console.log(myArray);
// for (let i = 0; i < myArray.length; i++) {
//  console.log(myArray[i]);
// }
// for (let val of myArray) {
//  console.log(val);
// }

//Exercise 5.7
// const obj = {
//     a: 1,
//     b: 2,
//     c: 3
//    };
//    for (let prop in obj) {
//     console.log(prop, obj[prop]);
//    }
//    const arr = ["a", "b", "c"];
//    for (let w = 0; w < arr.length; w++) {
//     console.log(w, arr[w]);
//    }
//    //el is a reference to elements in an object
//    for (el in arr) {
//     console.log(el, arr[el]);
//    }

//exercise 5.8
// for (i = 0; i <= 10; i++) {
//     console.log(i)
//     if (i === 4)
//         break;
// }

// let cars = [
//     {
//     model: "Golf",
//     make: "Volkswagen",
//     year: 1999,
//     color: "black",
//     },
//     {
//     model: "Picanto",
//     make: "Kia",
//     year: 2020,
//     color: "red",
//     },
//     {
//     model: "Peugeot",
//     make: "208",
//     year: 2021,
//     color: "black",
//     },
//     {
//     model: "Fiat",
//     make: "Punto",
//     year: 2020,
//     color: "black",
//     }
//    ];

//    for (let i = 0; i < cars.length; i++) {
//     if (cars[i].year >= 2020) {
//     if (cars[i].color === "black") {
//     console.log("I have found my new car:", cars[i]);
//     break;
//     }
//     }
//    }

//exercise 5.8
// let output = "";
// let skipThis = 6;
// for (let i = 0; i < 10; i++)
// {
//     if (i === skipThis || i ===8)
//     {
//         continue;
//     }
//     output += i ;
// }
// console.log (output);

//Project
const myTable = [];
const numm = 10;
for(let x=0; x<numm; x++){
 const temp = [];
 for(let y = 0; y<numm; y++){
 temp.push(x*y);
 }
 myTable.push(temp);
}
console.table(myTable);


// let groups = [
//     ["Martin", "Daniel", "Keith"],
//     ["Margot", "Marina", "Ali"],
//     ["Helen", "Jonah", "Sambikos"],
// ];

// for (let i = 0; i < groups.length; i++) {
//     let matches = 0;
//     for (let j = 0; j < groups[i].length; j++) {
//         if (groups[i][j].startsWith("M")) {
//             matches++;
//         } else {
//             continue;
//         }
//         if (matches === 2) {
//             console.log("Found a group with two names starting with an M:");
//             console.log(groups[i]);
//             break;
//         }
//     }
// }


// outer:
// for (let group of groups) {
//  inner:
//  for (let member of group) {
//  if (member.startsWith("M")) {
//  console.log("found one starting with M:", member);
//  break outer;
//  }
//  }
// }

