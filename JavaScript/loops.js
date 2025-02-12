
//? if-else statement
//? else if statement

// var age = 8;
// var citizen = false;
// var registered = false;

// if(age >= 18){
//     if(citizen){
//         if(registered){
//             console.log("You are eligible for vote");
//         }else{
//             console.log("You are not eligible for vote due to registration status");
//         }
//     }else{
//         console.log("You are not eligible for vote due to citizen status");
//     }
   
// }else{
//     console.log("You are not eligible for vote (Younger)")
// }

//? Even and Odd Number

// var num = 3;
// if(num%2==0){
//     console.log("Even Number..");
// }
// else{
//     console.log("Number is Odd...")
// }

//? Positive, Negative or Zero

// var num = 5;
// if(num === 0){
//     console.log("Zero");
// }else if(num > 0){
//     console.log("Postive number");
// }else{
//     console.log("Negative number");
// }

//! switch statement
// var day = "sdjf";
// switch(day){
//     case "Monday":
//         console.log("Today is Monday");
//         break;
//     case "Tuesday":
//         console.log("Today is Tuesday");
//         break;
//     case "Wednesday":
//         console.log("Today is Wednesday");
//         break;
//     case "Thursday":
//         console.log("Today is Thursday");
//         break;
//     case "Friday":
//         console.log("Today is Friday");
//         break;
//     case "Saturday":
//         console.log("Today is Saturday");
//         break;
//     case "Sunday":
//         console.log("Today is Sunday");
//         break;
//     default:
//         console.log("Invalid Input");
// }

//?------------------------------------------------------------------------------------

// var areaOfShape = "circle";
// var a = 10;
// var b = 20;
// var result;     
// switch(areaOfShape){
//     case "circle":
//         var r = 5;
//         result = 3.142 * (r*r);
//         console.log(result);
//         break;
//     case "rectangle":
//         result = a*b;
//         console.log(result);
//         break;
//     case "square":
//         result = a*a;
//         console.log(result);
//         break;
//     default:
//         console.log("Invalid input"); 
// }

//! while loop
// var num = 1;
// while(num<=10){
//     console.log(num);
//     num++;
// }

//! do-while loop
// var num = 1;
// do{
//     console.log(num);
//     num++;
// }while(num<=10);

//? Create a table of 5

// var num = 5;
// var i = 1;
// while(i <= 10){
//     console.log(num + " * " + i + " = " + (num*i));
//     i++;
// }

//! for loop

// for(var num = 1; num<=10; num++){
//     console.log(num);
// }

// var userInput;
// var positiveNumber;
// do{
//     userInput = prompt("Enter any positive number - ");
//     positiveNumber = parseFloat(userInput);
// }while(isNaN(positiveNumber) || positiveNumber < 0);
// console.log(positiveNumber);

//? sum of 1 to 10  
// var result = 0;
// for(var num = 1; num<=10 ; num++){
//     result = result+num;
// }
// console.log(result);

//? Prime Number
// var num = 3;
// var isPrime = true;
// for(var i = 2; i<num; i++){
//     if(num%i==0){
//         isPrime = false;
//         break;
//     }
// }
// if(isPrime){
//     console.log("Number is Prime");
// }
// else{
//     console.log("Number is not Prime");
// }

//? Leap year

// var year = 2001;
// if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
//     console.log("Leap Year");
// }else{
//     console.log("Not a leap year..");
// }

//? Pattern
for(var i = 1 ; i<=5; i++){
    var pattern = "";
    for(var j = 1; j<=i; j++){
        pattern = pattern + " *";
    }
    // console.log("*");
    console.log(pattern);
}