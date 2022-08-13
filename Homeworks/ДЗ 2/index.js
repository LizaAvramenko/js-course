
// //1

// function sum(a, b) {
//     return a + b;
// }

// const firstNumber = +prompt ("Введите любое число");
  
// const secondNumber = +prompt ("Введите любое число");
// if ( isNaN(firstNumber) || isNaN(secondNumber) ) {
//     alert ('Not correct')
// }

// else {
//     let result = sum  (firstNumber, secondNumber)
//     alert (result)
// }


// //2
// const userNames = ['Vasya', 'Petya', 'Masha'];

// for (let i = 0; i < userNames.length; i++) {
//    sayHiToUser(userNames[i])
// }

// function sayHiToUser(name) {
//     let sayHiToUser = 'Hello, ' +  name ;
//     alert (sayHiToUser)
// }


 
// //3

// function multiply (a, b) {
//     return (a * b)
// }
  
// const numbersArray = [1, 2, 3];

// for (i=0; i < numbersArray.length; i++) {
//   alert(multiply(numbersArray[i], i));
// }
  
 

//4
 
// let array1 = [1, 2, 3, 4, 5, 6];
// let array2 = [25, 7, 9, 85, 77, 4]


// function sum(arr) {
//     let sum = 0
//     for (let i=0; i < arr.length; i++) {
//     sum += arr[i] 
//     }
//    return sum
// }

// function comparison (arr1, arr2) {
//     if ( sum(array1) > sum(array2)) {
//         console.log ('Сумма чисел первого массива больше')
//     }
//     else {
//         console.log ('Сумма чисел второго массива больше')
//     }
// }
// console.log (comparison ( array1, array2))


//5. Написать функцию, которая принимает массив строк. И возвращает саммую длинную строку в этом массиве.



// let string = [ 'fghfhf', 'ttd', 'fdfdfduioop', 'op', 'p' ];

// function longestStr (str) {
//     maxString = [];
//     for (let i=0; i<str.length; i++) {
//         if (maxString.length < str[i].length) {
//             maxString = str [i];
//         }
//     }
//     return maxString;
// }
// console.log (longestStr(string))

//6

// const num1 = +prompt('Введите первое число');
// const num2 = +prompt('Введите второе число');

// if ( isNaN(num1) || isNaN(num2) ) {
//     alert ('Not correct')
//    }
//    else {
//       getNumberSum(num1, num2)
//    }
//    console.log 
   
// function getNumberSum (number1, number2) {
// let result = number1 + number2
// alert (result)
// }
     
//7

// function checkType (tpof) {
//     return (typeof(tpof))
// }

// console.log (checkType(true))

//8

// function factorial(n) {
//     return (n != 1) ? n * factorial(n - 1) : 1;
//   }
      
//   console.log( factorial(3) );