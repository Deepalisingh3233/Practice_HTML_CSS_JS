//? DataTypes
//? 1. Primitive
// ?    i. Number
// ?    ii. String
// ?    iii. Boolean
// ?    iv. Undefined
// ?    v. Null
// ?    vi. Bigint 
// ?    vii. Symbol
//? 2. Object
// ?    i. Array
// ?   ii. Object
// ?    iii. Date

var name = "Deepali";
console.log(name);
console.log(typeof name);


var myNum = 9232;
console.log(myNum)
console.log(typeof myNum);


var isRaining = false;
console.log(isRaining);
var areUAwesome = true;
console.log(areUAwesome);
console.log(typeof isRaining);


var deep;
console.log(deep);
console.log(typeof deep);


var badMemories = null;
console.log(badMemories);
console.log(typeof badMemories);

var bigNum = 12323423423423434n;
console.log(bigNum);
console.log(typeof bigNum);

console.log('----------------------')


//? Convert String to a number
var myNo = "10";
console.log(typeof myNo);
console.log(typeof +myNo);
console.log(typeof Number(myNo));

console.log('----------------------')

//? Convert Number to String
var str = 5;
console.log(typeof str);
console.log(typeof String(str));
console.log(typeof (str+""));

console.log('----------------------')

//? To check truthy and Falsy values in jS
// var day = "";
// var day = "sunday";
// var day = 0;
// var day = null;
var day = -5;


if(day){
    console.log("This is truthy value");
}else{
    console.log("This is Falsy value");
}

console.log('----------------------')
//? parseInt and parseFloat 
// var myString = "42";
// var myNumber = parseInt(myString);
// console.log(myNumber);
// console.log(typeof myNumber);

// var myString = "42.5";
// var myNumber = parseInt(myString);
// console.log(myNumber);
// console.log(typeof myNumber);

var myString = "42.5";
var myNumber = parseFloat(myString);
console.log(myNumber);
console.log(typeof myNumber);

console.log('----------------------')
console.log(parseInt("&123"));
console.log(parseInt("-123"));
console.log(parseInt("xyz"));

console.log('----------------------')
console.log(isNaN("5"));

console.log('----------------------')
if(NaN == NaN){
    console.log("Both are equal.");
}else{
    console.log("Not equal");
}
