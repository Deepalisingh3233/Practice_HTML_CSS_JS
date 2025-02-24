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


function palindromeCheck(number) {
    let numStr = number.toString();
    console.log(numStr);

    let numArr = numStr.split('');
    console.log(numArr);
    
    return numArr.every((num, index) =>
        num === numArr[numArr.length - 1 - index]);
}

// Checking the number is Palindrome
console.log(palindromeCheck(121));
console.log(palindromeCheck(12321));
console.log(palindromeCheck(12345)); 
