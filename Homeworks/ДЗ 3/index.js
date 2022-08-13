
// //1

// const users = {
//     "John": 28,
//     "Mark": 30,
//     "David": 25,
//     "Richard": 42,
//     "Bob": 12,
//     "Tom": 61,
// };
    
// const values = Object.values(users);
// let total = 0;
// for (const value of values) {
//    total += value;
// }
          
// console.log(total);

// 2

// let counter = 0;
// let allNames = '';

// while (true) {
//     let names = prompt ('Enter your name!');
//     if (!names) break;
//     counter ++;

//     for (let i=0; i < counter; i++) {
//         allNames += `${names}, `
//         break
//     }
// }

// alert ('Всего пользователей: ' + counter + '. ' + 'Их имена: ' + allNames);

// 3. Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится?
//первый способ

// let numberN = 1000;
// while (numberN > 50) {
//   numberN = numberN / 2
// }
// console.log (numberN)

// // второй способ

//  for (var num = 1000; num > 50; num = num / 2);
// console.log(num);

//4. Выведите в столбец числа от 10 до 30 и от 40 до 50. используй document.write() и тег <br>

// let i = 10;
// while (i <= 30) {
//   document.write ( i+ '<br>' );
//   i++1
// }

// let x = 40
// while (x <= 50) {
//   document.write ( x + '<br>');
//   x+=1

// }


// 5. Выведите столбец четных чисел в промежутке от 0 до 100.

// for (let i = 0; i <= 100; i++) {
// if (i % 2 == 0) {
//   console.table( i );
// }}


// 6. С помощью цикла найдите сумму чисел от 1 до 100.

// let total = 0;
// for ( let i=0; i <= 100; i++ ) {
//     total += i;
// }
// console.log ('Total: ', total)



//7. Дан массив с элементами [2, 3, 4, 5, 7, 9, 10]. С помощью цикла for найдите произведение элементов этого массива. и выведите на экран
// const numbers = [2, 3, 4, 5, 7, 9, 10]
// let total = 1;
// for ( let i=0; i < numbers.length; i++ ) {
//     console.log (numbers[i]);
//     total *= numbers[i];
// }
// console.log ('Total: ', total)


//8 

// const eng = [];
// const rus = [];

// const colors = {
// green: 'зеленый',
// red: 'красный',
// blue: 'голубой',
// white: 'белый',
// yellow: 'желтый'
// };

// for (const key in colors) {
//     if (colors, key) {
//         const element = colors[key];
    
//     }
//     eng.push(key)
//     rus.push(colors[key])
// }

// console.log(eng)
// console.log(rus)

// 9. создайте массив с элементами. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4 или 6. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.

// const num = [1, 6, 9, 89, 45, 2, 77, 55, 1, 8];

// for (let i = 0; i < num.length; i++){
//     if (num [i] === 4 || num [i] === 6 ){
//         alert ('Есть!' ) 
//         break
// }}


// 10. Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.

// const numbers = [ ,1, 2, 3, 4, 5, 6, 7, 8, 9, , ]
// console.log('-$numbers.join("-")}-');


//11

// const daysOfWeek = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];
// for ( let i=0; i<daysOfWeek.length; i++);
// console.log ( `${daysOfWeek[0]}, ${daysOfWeek[1]}, ${daysOfWeek[2]}, ${daysOfWeek[3]}, ${daysOfWeek[4]}, (${daysOfWeek[5].toUpperCase()}), ${daysOfWeek[6].toUpperCase()} `)


//12

// const user = {
//     name : 'Liza' ,
//     age : 24,
//     work : 'logist' ,
//     phone : +576576747,
//     education : 'yes',
//     pets : 'dog',
//     car : 'Hyundai',
//     modelCar : 'Elantra',
//     colorCar : 'gray',
//     yearCar : 2017
//   }
//   for (const key in user) {
//   console.log(user[key])
//   }

//13

// const test1 = false;
// const test2 = 111;
// const test3 =  0 
// const test4 = NaN
// const test5 = 'string'
// const test6 =  111;
// const test7 = NaN ;
// const test2 = 'Sam';
// const test3 = 111;
// const test4 = 111;
// const test5 = 100 
// const test6 = {name: 'Sam'} 
// const test7 =  NaN 


//14 
// if (item > item2) {
//   console.log('first')
// } else {
//   console.log('second')
// }

// let item = 5
// let item2 = 9
// const type = item>item2 ? 'first' : 'second' ; 
// console.log (type);


// let result;
// if (item > item2) {
//   result = 0
// } else {
//   result = 1
// }
// console.log(result)

// const item = 5;
// const item2 = 4;


// let type = item > item2 ? result = 0 : result = 1 ;
// console.log(type)



// 15. переписать в синтаксис switch case


// const item = 0
// const item2 = 1

// switch( true ) {
//   case (item > item2) :
//     console.log('first') ;
//     break;

//   case (item > 1 && item2 > 3) :
//     console.log('second') ;
//     break;

//   case (item < 1 || item2 > 3) :
//     console.log('third') ;
//     break;

//   case (item2 > 3) :
//     console.log('forth') ;
//     break;
    
//   default :
//   console.log('fifth')  

// }

