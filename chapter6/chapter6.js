// function sayHello() {
//     let you = prompt("What's your name? ");
//     console.log("Hello ", you + "!");
//    }
//    sayHello();

//exercise 6.1
//    function add (a,b)
//    {
//     return a + b;
//    }

//    let firstValue = Number(prompt ("enter a number"));
//    let secondValue = Number(prompt ("enter another number"));
//    alert("your answer is: " (add( firstValue, secondValue)));

//exercise 6.2

// let adjectives = ["fast ", "happy" , "Bright,", "calm", "Beautiful"];

// function myFunction ()
// {
//     let question = prompt ("What is you name ?");
//     let RandomAdj = Math.floor(Math.random() * adjectives.length);
//     alert( adjectives[RandomAdj] + " " + question );
// }

// myFunction();

//exercise 6.2

// let number1 = Number (prompt("Enter 1st number") );

// let number2 = Number (prompt("Enter 2nd number") );

// let operator1 = prompt ("enter operator + or -" );



// function calculator (a, b, op)
// {
//     if (op == "-")
//     {
//         return (a - b);
//     }
//     else 
//     {
//         return (a+b);
//     }
// }
// alert (calculator (number1, number1, operator1 ));

// function addTwoNumbers(x = 2, y = 3) {
//     console.log(x + y);
// }
// addTwoNumbers();
// addTwoNumbers(6, 6);
// addTwoNumbers(10);

// let doingArrowStuff = x => console.log(x);

// let addTwoNumber = (x,y) => console.log (x+y);
// addTwoNumber(4,5);

// let spread = ["so", "much", "fun"];
// let message = ["JavaScript", "is", ...spread, "and", "very",
//  "powerful"];

// function someFunction(param1, param2) {
//     console.log(param1, param2);
//    }
//    someFunction("hi", "there!", "How are you?");

//    function someFunction(param1, ...param2) {
//     console.log(param1, param2);
//    }
//    someFunction("hi", "there!", "How are you?");



//exercise 6.4

// function addTwoNumbers(x, y) {
//     return x + y;
//    }


// let result = addTwoNumbers(4, 5);
// console.log(result);

// let addTwoNumbers = (x, y) => x + y;

// let resultsArr = [];
// for(let i = 0; i < 10; i ++){
//  let result = addTwoNumbers(i*5, i*i);
//  resultsArr.push(result);
// }
// console.log(resultsArr);

// let x = "global";
// function doingStuff(x) {
//  console.log(x);
// }
// doingStuff("param")

// function confuseReader() {
//     x = "Guess my scope...";
//     console.log("Inside the function:", x);
//    }
//    confuseReader();
//    console.log("Outside of function:", x);

// (function (a,b) {
//     console.log(a + b);
//    })(1,1);

//exercise 6.5

//    //1
//    let myString = "1000";

//   //2 
//    (function () {
//     let myString ="3000"; 
//     console.log(myString);
//    })();

//    console.log(myString);
//    //3
//    let result = function()
//    {
//     let result = "5000";
//     return result;
//    }();

//    console.log(result);


//  //4
//    ( function(newValue)
// {
//     console.log ("Your current value is: " + newValue)
// })("2000");


// function getRecursive (nr)
// {
//    console.log (nr);
//    if (nr > 0)
// {
//     factorial *=nr
//     getRecursive(--nr);
// }

// }
// let factorial =1
// getRecursive(Number(prompt("Give me a number to calculate factorial")));


// function doOuterFunctionStuff(nr) {
//    doInnerFunctionStuff(nr);
//    function doInnerFunctionStuff(x) {
//    let z = 10;
//    }
//   }
//   doInnerFunctionStuff(3);
  


// function countdown(count)
// {
// console.log (count);
// if (count < 1)
// {
// return 
// }else
// {
//    countdown (--count);
// }
// }

// countdown(10);

// function countdown2 (count)
// {
//    console.log (count)
//    if (count > 0)
//    {
//       return countdown (--count)
      
//    }
   
// }

// countdown2(10);

//exercise 6.8

// let anonFunction = function (a)
// {
//    console.log (a)
// }
// anonFunction(5);

// console.log("============================")

// function variableFun (a)
// {
//    console.log (a)
// }
// variableFun(5);


let functionVariable = function () {
   console.log("Not so secret though.");
  };

  function doFlexibleStuff(executeStuff) {
   executeStuff(6,4);
   console.log("Inside doFlexibleStuffFunction.");
  }


// doFlexibleStuff (functionVariable);

// function multiplyNum (num1, num2)
// {
//    console.log(num1*num2)
// }
// doFlexibleStuff (multiplyNum);

// let youGotThis = function () {
//    console.log("You're doing really well, keep coding!");
  // };
//   setTimeout(youGotThis, 10000);

// setInterval (youGotThis, 1000)

//Chapter 6 project


function count (startNum)
{
if (startNum > 10)
{
console.log ("Count exceeded 10");
}
else {

  console.log ("count " + startNum+1);
}
}

count(10);