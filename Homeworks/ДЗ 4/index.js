//1

//  let tempF = 50
//  let tempC = 0

// function temperatureConverter () {

//   tempC = ((tempF-32) / 1.8) ;
 

// }

// temperatureConverter ()
// alert (tempC.toFixed(1) + '°C')


//2 

// function findVowels (str) {
//   let count = 0;
//   const vowels = ['a', 'e', 'i', 'o', 'u'];

//   for ( let char of str.toLowerCase() ) {
//     if (vowels.includes(char)){
//       count +=1;
//     }
//   }
//   return count;
// }

// console.log (findVowels('Masha'))




// let str = 'waokgeutyr'
// let vow = 'aeiouAEIOU'

// function countVowCon () {

// let amount = {
//   vowels: 0,
//   consonants: 0
// };

// let count = 0;
// for ( i=0; i < str.length; i++) {
//   for ( let x=0; x < vow.length; x++) {
//     if (str[i]===vow[x]) {
//       count ++
//     }
//   }
// }
// amount.vowels = count
// amount.consonants = (str.length - amount.vowels)

// }

// function countVowCon()

// alert(amount);



//3

// function x() {
//   return function newF( a, b ) {
//     return a + b 
//   }
// }
// const getSumX = x()
// console.log (getSumX(5, 10))




//4

// let counter = 0;

// function increment () {

// while (true) {

//   let name = prompt ('Enter your name!');
//   if (!name)
//   break;
//   counter ++;

// }

// }
// increment();
// console.log ('Sum of visitors: ' + counter)

/*
//5(1)


// function getMaxValue ( a, b) {
//   return  a > b ? a : b ;
  
// }
// console.log (getMaxValue(7,9))

// function someFunction ( func, value, value2 ) {
//   return func(value, value2)
// }
// console.log (someFunction (getMaxValue, 10, 15))

// 5(2)

// function getSum() {
//   let result = 0;
//   let i;
//   for (i=0; i < arguments.length; i++) {
//     result += arguments [i]
//   }
// return result
// }

// console.log (getSum (1, 5, 7))
*/


//6

// function getCalculator () {
//     let result = 0;
//     return {
//         getResult: function() {
//             return result
//         },
//         plus: function(value) {
//             return result += value
//         },
//         minus: function(value) {
//             return result -= value
//         },
//         multiply: function(value) {
//             return result *= value
//         },
//         divide: function(value) {
//             return result /= value
//         }
//     }
// }
// const calculator = getCalculator();
// calculator.plus(6)
// calculator.multiply(4)



// console.log(calculator.getResult ())