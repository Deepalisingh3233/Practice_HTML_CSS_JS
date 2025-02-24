// let fruits = ["apple", "banana", "orange", "mango"]

//? CRUD Operations

// console.log("Push method: ",fruits.push("guava"))
// console.log(fruits);
// console.log("Pop method: ",fruits.pop())
// console.log(fruits);
// console.log("Unshift method: ",fruits.unshift('papaya'));
// console.log(fruits);
// console.log("Shift method: ",fruits.shift());


//? Splice(start, deleteCount, item1, item2, ..., itemN)
// console.log(fruits.splice());
// console.log(fruits.splice(1));
// console.log(fruits.splice(1, 1));
// console.log(fruits.splice(1, 1, "grapes"));
// console.log(fruits);
//? add at the last
// fruits.splice(fruits.length, 0, "grapes")
// console.log(fruits);
//? add the value without deleting
// fruits.splice(1, 0, "grapes")
// console.log(fruits);


//? Searching and filter in array - indexOf, lastIndexOf & includes
//? indexOf -> returns first index
//? Syntax -> indexOf(searchElement, fromIndex)

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 6]
// console.log(numbers.indexOf(4));  //3
// console.log(numbers.indexOf(3, 5)); //-1
// console.log(numbers.lastIndexOf(6)); //9
// console.log(numbers.indexOf(6));  //3
// console.log(numbers.lastIndexOf(6, 8)); //5

//? includes -> return true or false, check element is present or not in an array
//? includes(searchElement, fromIndex)

// console.log(numbers.includes(6));

//! Add Dec at the last
months = ["Jan", "Feb", "Mar", "May", "June"]
// months.splice(months.length, 0, "Dec")
// console.log(months);
//! Update the Mar to March

// console.log(months);
// months.splice(months.indexOf("Mar"), months.indexOf("Mar") , "March")
// months.splice(months.indexOf("Mar"), 1 , "March")
// console.log(months);

//? Delete the june
// months.splice(months.indexOf("June"), 1)
// console.log(months);


//? Filter in Array
// const numbers = [1, 2, 6, 3, 4, 5, 6, 4, 7, 8, 9, 6]

//? Find methods -> returns number find first element if the match is not found it returns undefine

// const result = numbers.find((currElem) => {
//     return currElem > 7
// })
// console.log(result);


//? findIndex()
// const result = numbers.map((currElem) => currElem * 5)
// console.log(result);
// const result2 = result.findIndex((currElem) => {
//     return currElem > 10
// })
// console.log(result2);

//? filter()
// const result = numbers.filter((currElem) => {
//     return currElem > 4
// })
// console.log(result);

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
const products = [100, 200, 300, 400, 500]
const totalPrice = products.reduce((accum, currElem)=> {
    return accum + currElem
}, 0)
console.log(totalPrice);
