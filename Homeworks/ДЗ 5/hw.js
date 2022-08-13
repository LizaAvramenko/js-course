
//1

// const length = 10;
// const filledArray = Array(length).fill(111);
// console.table (filledArray)


//второй метод

// const newArray = (item, length) => Array(length).fill(item)
// console.log (newArray('guyfufuy', 9))


// 2. Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, null, NaN.

// const arr1 = [ 1, 0, 5, '', 3, undefined, 99, null];

// const result = arr1.filter((el)=> el);

// console.log(result)

// 3. Напишите функцию, возвращает новый массив без предоставленных значений. Используйте примитивные типы.

// const numbers = [6, 7, 1, 2, 9, 1, 6, 2, 7, 1, 2];

// первый способ const result = numbers.filter(numbers => numbers !== 1 && numbers !== 6 );

// console.log(result);

// function without (arr, elements) {
//     return numbers.filter ((item) => !elements.includes(item))
// }
// const result = without (numbers, [1, 2])
// console.log(result);

// 4. Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.

// const arr = [2, 3, 0, 7, 7];
// const arr2 = [2, 3, 0, 7, 7];

// const result = arr.length ===arr2.length && arr.every ((value, index) => value  === arr2[index] );

// console.log (result)

// 5. Напишите функцию, которая разделяет массив на части заданного размера.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9 ];
 
// function result (array, num) {
//     let resultArray = [];
//     let innerArray = [];
//     array.forEach((item, index) => {
//         innerArray.push(item); 
//         if ((index +1) % num ===0) {
//             resultArray.push(innerArray)
//             innerArray = []
//         }
        
//     });
//     if (innerArray.length > 0) {
//         resultArray.push(innerArray)
//     }

//     return resultArray
// }
//  console.log (result(arr, 5))

// 7. Напишите функцию removeItems(arr, []), которая удаляет определенный элемент из массива.

// const numbers = [1, 2, 3, 4, 5, 6, 6, 5, 4, 3, 2, 1];
// function without (arr, elements) {
//         return numbers.filter ((item) => !elements.includes(item))
//     }
//     const result = without (numbers, [1, 2])
//  console.log(result);

// 8. Напишите функцию randomElement(arr), которая возвращает случайный элемент из массива.

// const arr = ['apple', 'orange', 'banana', 'grapes'];
// function randomElement(array) {
//     const index = Math.round(Math.random()*array.length)
//     return array [index]
// }
// console.log(randomElement(arr))




// 9. вывести минимальное значение массива (reduce)

// const num = [ 4, 9, 56, 88, 9, 39, 245];

// const minNum = num.reduce((prev, item,i, arr) => prev < item ? prev : item)
// console.log(minNum)

// 10. дан массив [{width: 10, height: 20}, {width: 12, height: 26}, {width: 14, height: 50}, {width: 6, height: 11}] создать объект, который будет хранить общую ширину, длину, площадь и количество елеметнов {widthTotal, heightTotal, space, quantity}

// const arr = [
//     {width: 10, height: 20},
//     {width: 12, height: 26},
//     {width: 14, height: 50},
//     {width: 6, height: 11} 
// ]


// const fullInfo = arr.reduce((prev, item) => {
//     	return {
//     		totalWidth: prev.totalWidth + item.width, 
//     		totalHeight: prev.totalHeight + item.height,
//     		space: ((prev.totalWidth + item.width) + (prev.totalHeight + item.height)),
//     		quantity: prev.quantity + 1,
//     	}
//     }, {
//     	totalWidth: 0,
//     	totalHeight: 0,
//     	space: 0,
//     	quantity: 0,
//     })
    
//     console.log(fullInfo)





    