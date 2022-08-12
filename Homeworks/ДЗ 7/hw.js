
//1. Написать реккурсивную функцию которая будет глубоко копировать обект.

// const deepClone = obj => {
//     if (obj === null) return null;
//     // Создаем поверхностный клона оригинала.
//     let clone = Object.assign({}, obj);
  
//     // Определяем, какие пары ключ-значение
//     // необходимо глубоко клонировать.
//     Object.keys(clone).forEach(
//       key =>
//         (clone[key] =
//           typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key])
//     );
  
//     // Проверяем является ли obj массивом и не пустой ли он.
//     return Array.isArray(obj) && obj.length
//       // Если obj массив и он не пуст, тогда
//       // указываем объекту clone длину исходного массива что бы
//       // конвертировать clone в массив и вернуть его.
//       ? (clone.length = obj.length) && Array.from(clone)
//       // Если obj пустой массив,
//       : Array.isArray(obj)
//       // то возвращаем его
//       ? Array.from(obj)
//       // в других случаях obj это объект и мы возвращаем копию clone.
//       : clone;
//   };
  
//   // Пример:
  
//   const a = { foo: "bar", obj: { a: 1, b: 2 } };
//   const b = deepClone(a);
//   // a !== b true
//   // a.obj !== b.obj true

//   console.log(b)

//2. Написать реккурсивную функцию которая будет принимать массив строк и возвращать самую длинную строку. Если в массиве 2 и более строк, которые одной длинны, и являются самыми длинными - вернуть массив саммых длинных строк.

let strings = ["bbllkw", "oox", "ejjuyyy", "plmiis", "xxxpzgpspsaasasasasasas", "xxwwkktt", "xxxpzgpspsaasasasasasoo", "xxxpzgpspsaasasasasasot", "dvvvwz"];
const recursion = (arr, i = 0, longestString = '') => {
if(arr.length === i) {
    return longestString
}
const currentString = arr[i]
if (currentString.length > longestString.length) {
    longestString = currentString
} else if (currentString.length === longestString.length) {
    
longestString = `[${longestString}, ${currentString}]`
}
    return recursion(arr, i +1 , longestString)
}
console.log(recursion(strings))





//3. Написать реккурсивную функцию, которая будет возводить число в степень и возвращать результат. fn(number, n) number - число, n - степень

// function pow(x, n) {
//     if (n == 1) {
//       return x;
//     } else {
//       return x * pow(x, n - 1);
//     }
//   }
  
//   console.log( pow(2, 3) )

//4. Взять метод массива forEach и попробоваоть вызвать в контексте строки 'string'. В результате в цикле forEach вывести в консоль: 's', 't', 'r', 'i', 'n', 'g'.

// const str = 'string'
// const result = Array.prototype.forEach.call(str,(item) => console.log(item))
// console.log(result)

//5 Написать функцию: filterString(string, ignoreLetters). Используя  метод массива filter вызвать его в контексте строки и вернуть из функцию строку без ignoreLetters.

// let str = 'string'
// let ignoreLetters = ['s', 'g']
// let result = Array.prototype.filter.call(str, (item) => !ignoreLetters.includes(item)).join('')
// console.log(result)

// function filterString(string, ignoreLetters) {
//     newString = [...string]
//  return newString.filter((item) => !ignoreLetters.includes(item))
// }

// console.log (filterString('string', ['s', 'g']))
    


// 6. Написать функцию, которая может принимать от 1 до бесконечности аргументов (чисел) и возвращать сумму этих чисел. Сделать 2 варианта. Использую rest оператор. И используя псевдомасив arguments.

// function sum() {
//     var result = 0;
  
//     for (var i = 0; i < arguments.length; i++) {
//       result += arguments[i];
//     }
  
//     return result;
//   }

//   console.log(sum(7,9,7,10,22))


//   function sum(...theArgs) {
//     let total = 0;
//     for (const arg of theArgs) {
//       total += arg;
//     }
//     return total;
//   }
  
//   console.log(sum(1, 2, 3));



