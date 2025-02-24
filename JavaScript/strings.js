// const str = "Hello world!"
// console.log(str.length);


//? Escape character
// const str1 = "My name is \"Deepali Singh\" and \n I an a QA"
// console.log(str1);

//! String search methods

//? a: indexOf()
//? b: lastIndexOf()
// let text = "Deepali Singh"
// console.log(text.indexOf('Singh'));  //8
// console.log(text.indexOf('singh'));  //-1

// let strArr = Array.from(text)
// console.log(strArr);
// let strMap = strArr.map((currElem, index) => `${currElem} - ${index}`)
// console.log(strMap);

//? c.search() -> Return index number, if no match founds return -1

// let text = "Hello JavaScript, welcome to world best JavaScript course"
// let result = text.search(/JavaScript/) //-1
// let result = text.search(/Javascript/i)
// console.log(result);

//? match() -> return null if match not found
// let text = "Hello JavaScript, welcome to world best JavaScript course"
// let result = text.match("javascript") //null
// let result = text.match("JavaScript") 
// let result = text.match(/JavaScript/g) 
// let result = text.match(/Javascript/gi) 

// console.log(result);

//? matchAll() -> Not working
// let text = "Hello JavaScript, welcome to world best JavaScript course";

// let matchResult = text.matchAll()
// let matchResult = text.matchAll("JavaScript") 
// let matchResult = text.matchAll(/JavaScript/g) 
// let matchResult = text.matchAll(/Javascript/gi) 

// console.log(matchResult);

//? includes
// let text = "Hello JavaScript, welcome to world best JavaScript course";
// let includeResult = text.includes("java")
// console.log(includeResult);

//? startsWith()
// let text = "Hello JavaScript, welcome to world best JavaScript course";
// let result = text.startsWith("hello")
// let result = text.startsWith("hello",3)
// console.log(result);

//? endsWith()
// let text = "Hello JavaScript, welcome to world best JavaScript course";
// let result = text.endsWith("course")
// console.log(result);

//! Extracting String Parts -> 
//? slice(start, end) -> not include indexEnd, it works backward too

// let text = "Deepali Singh"
// console.log(text.slice(8));

// console.log(text.slice(0,5));

//? substring()
let text = "Hello JavaScript, welcome to world best JavaScript course";
// console.log(text.substring(0,5));
// console.log(text.substring(6));
// console.log(text.replace("JavaScript","Deepali"));
// console.log(text.replace(/javascript/i, "deepali"));

// console.log(text.replaceAll("JavaScript", "Deepali"));


//! Extracting String Characters
//? charAt(position)
//? charCodeAt(position)
//? at(position)

// let text = "Hello JavaScript, welcome to world best JavaScript course";
// console.log(text.charAt(4)); //o
// console.log(text.charAt(-4)); //empty

// let text = "Hello JavaScript, welcome to world best JavaScript course";
// console.log(text.charCodeAt(4)); //o

// let result = text.at(4)
// console.log(result);


//? trim() -> doesn't removes the between spaces only works on starting and ending

// const str = "     Hello   world!"  // Hello   world!
// console.log(str.length);
// console.log(str.trim());
// console.log(str.trim().length);


//? split()
const str = "apple, mango, banana, orange"
// let strArr = str.split(",") //? String to array
// let strArr = str.split(",").reverse();   //? reverse the array
let strArr = str.split(",").reverse().join(); //? array to string

console.log(strArr);


