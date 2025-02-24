let fruits = ["apple", "bnana", "orange", "mango"]

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

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 6]
console.log(numbers.indexOf(4));  //3
// console.log(numbers.indexOf(3, 5)); //-1
console.log(numbers.lastIndexOf(6));


//? includes -> return true or false, check element is present or not in an array
//? includes(searchElement, fromIndex)