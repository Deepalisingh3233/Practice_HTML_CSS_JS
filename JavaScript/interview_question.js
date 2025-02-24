//! Calculator function 
//? console.log(5,2, '+')

// const Calculator= (num1, num2, operator) => {
//     let result;
//     switch (operator) {
//         case '+':
//            return result = num1 + num2
//         case '-':
//             return result = num1 - num2
//         case '*':
//             return result = num1 * num2
//         case '/':
//             if(num2 === 0){
//                 return "0 is not allowed"
//             }else{
//             return result = num1 / num2
//             }
//         default:
//             return "Invalid operator"
//             break;
//     }
// }

// console.log(Calculator(4, 5,'+'));
// console.log(Calculator(4, 5,'-'));
// console.log(Calculator(4, 5,'*'));
// console.log(Calculator(4, 0,'/'));


//! Reverse String

// const isReverse = (str) => {
//     let reverseStr = '';
//     for (let i = str.length-1; i >= 0; i--) {        
//         reverseStr += str[i]        
//     }
//     console.log(reverseStr);

// }
// isReverse("Deepali Singh")

//! Palindrome check

// const isPalindrom = (str) => {
//     let reverseStr = '';
//         for (let i = str.length-1; i >= 0; i--) {        
//             reverseStr += str[i]        
//         }
//         if(reverseStr === str){
//             return "String is Palindrome"
//         }
//         else{
//             return "String is not Palindrome"
//         }
//         // reverseStr === str ? true : false;
// }

// console.log(isPalindrom("level"));


// function palindromeCheck(number) {
//     let numStr = number.toString();
//     console.log(numStr);

//     let numArr = numStr.split('');
//     console.log(numArr);

//     return numArr.every((num, index) =>
//         num === numArr[numArr.length - 1 - index]);
// }

// // Checking the number is Palindrome
// console.log(palindromeCheck(121));
// console.log(palindromeCheck(12321));
// console.log(palindromeCheck(12345)); 


//! User wants to delete the value 6
// const numbers = [1, 2, 6, 3, 4, 5, 6, 4, 7, 8, 9, 6]
// let value = 6
// let updatedCart = numbers.filter((currElem) => {
//     return currElem !== value
// })
// console.log(updatedCart);

//! Filter products with a price less than or equal to 500

// const products = [
//     { name: "Laptop", price: 12000 },
//     { name: "Phone", price: 9000 },
//     { name: "Tablet", price: 6000 },
//     { name: "Smart Watch", price: 3000 },
//     { name: "Charger", price: 400}
// ];
// // console.log(products);

// const filterProduct = products.filter((currElem) => {
//     return currElem.price <= 500
// })
// console.log(filterProduct);

//! Filter unique values
// const numbers = [1, 2, 6, 3, 4, 5, 6, 4, 7, 8, 9, 6]
// let uniqueValues = numbers.filter((currElem, index, arr) => {
//     return arr.indexOf(currElem) === index
// })
// console.log(uniqueValues);

// console.log(new Set(numbers));
// console.log([... new Set(numbers)]);

//! How to Compare and Sort
// let fruits = ["banana", "apple", "orange", "mango"]
// fruits.sort()
// console.log(fruits);
// const numbers = [1, 2, 6, 3, 4, 5, 6, 4, 7, 8, 9, 6]
// console.log(numbers.sort());

//? Compare callback function

// numbers.sort((a, b) => {
//     if(a > b){
//         return -1
//     }else{
//         return 1
//     }
// })
// console.log(numbers);


//! using map tp square each number and create a new array
// const numbers = [1, 2, 3, 4, 5]
// const sqr = numbers.map((currElem) => {
//     return currElem * currElem
// })
// console.log(sqr);

//! Using the map method, write a function that takes an array of strings and returns a new array where each string is capitalized
// let fruits = ["banana", "apple", "orange", "mango"]
// let result = fruits.map((currElem) => {
//     return currElem.toUpperCase()
// })
// console.log(result);

//! Using the map method, write a function that takes an array of numbers and returns a new array where each number is squared, but only if it's an even number.
// const numbers = [1, 2, 3, 4, 5]
// const result = numbers
//     .map((currElem) => {
//         if (currElem % 2 === 0) {
//             return currElem * currElem
//         }
//     })
//     .filter((currElem) => currElem !== undefined )

// console.log(result);

//? Another way

// const result = numbers.map((currElem) => (currElem % 2 === 0 ? currElem * currElem : undefined))
//     .filter((currElem) => currElem !== undefined)
// console.log(result);


//! Using the map method, write a function that takes an array of names and returns a new array where each name is prefixed with "Mr”.

// const name = ["Abhay", "Ajay", "Arjun", "Ankit"]
// const result = name.map((currElem) => `Mr. ${currElem}`)
// console.log(result);

//? Reduce methods
/*
Syntax: Array.reduce( function callback(accumulator, currentValue, index, array){

}, initialValue);
*/

//! Write a JavaScript function that calculates the total price of items in a shopping cart. The function should take an array of item prices as input and return the total price.
// const products = [100, 200, 300, 400, 500]
// const totalPrice = products.reduce((accum, currElem)=> {
//     return accum + currElem
// }, 0)
// console.log(totalPrice);

//! Write a JavaScript function that prints the letters 'a' through 'z' in the console. You should use a loop to iterate through the letters and print each one on a new line.

// console.log("a".charCodeAt(0));
// console.log("z".charCodeAt(0));

// for (let i = 97; i <= 122; i++) {
//     console.log(String.fromCharCode(i));
// }

//! 2: Write a function to count the number of vowels in a string?

// const countVowel = (str) => {
//     let count = 0
//     const vowels = "aeiou"
//     for (const char of str) {
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }
//     return count
// }

// console.log(countVowel("Quick brown fox Jumps OVER a lazy dog"));

//! Write a function to check if all the vowels presents in a string or not?
// const checkAllVowel = (str) => {
//     let count = 0
//     const vowels = "aeiou"
//     for (const char of vowels) {
//         if (!str.includes(char)) {
//             return false;
//         }
//     }
//     return true
// }

// console.log(checkAllVowel("Quick brown fox Jumps OVER a lazy dog"));

//! Write a JavaScript function isPangram that takes a string as input and returns true if the string is a pangram (contains all letters of the alphabet) and false otherwise. The function should be case- insensitive and ignore spaces.
    // Constraints:
    // 1: The input string will consist of alphabetic characters and spaces.
    // 2: The function should handle both uppercase and lowercase letters.
    // 3: Consider the English alphabet with 26 letters.

const programChecker = (str) => {
    let inputArr = str.toLowerCase().split("")
    // console.log(inputArr);
    const values = inputArr.filter((currElem) => 
        currElem.charCodeAt() >= "a".charCodeAt(0) && 
        currElem.charCodeAt() <= "z".charCodeAt(0)
    )
    // console.log(values);
    return new Set(values).size === 26
    // return ([...new Set(values)].length) === 26;
    
    
}
console.log(programChecker("The quick brown fox Jumps OVER a lazy dog"));
// console.log("A".charCodeAt(0));
// console.log("Z".charCodeAt(0));
// console.log("a".charCodeAt(0));
// console.log("z".charCodeAt(0));
// console.log(String.fromCharCode(92));
