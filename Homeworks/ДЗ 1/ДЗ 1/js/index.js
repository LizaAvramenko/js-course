

/* 4.
const userName = prompt ('Enter your name!')
const userSurname = prompt ('Enter your surname! ')
alert (userName+' '+ userSurname ) 
*/


/*5 задача
function areaRectangle (width, length) {
    let area = width*length;
    return area;
}
let width= 10.83;
let length = 8.45;
alert ('Area= '+ areaRectangle(width, length). toFixed(1));
*/


/*6
const userName = prompt ('Enter your name!');
alert ("Hello"+ ',' + " " + userName)
*/

/* 7
const result = Math.pow(2, 5);
console.log(result);
*/

/*8

const MINIMUM_AGE = 20;
const userAge = prompt ('Enter your age!')

if (userAge <= MINIMUM_AGE) {
    alert ( 'Привет!')
}
if (userAge > MINIMUM_AGE) {
    alert ( 'Здравствуйте!')
}
*/

/*9

const userAnswer = prompt ('Отгадайте загадку: В семье было два отца и два сына. Сколько это человек?' );
const requaredAnswer = 3 ;

if (userAnswer == requaredAnswer )  {
    alert ('Молодец! Правильный ответ')
}
else { 
    alert ('Неправильный ответ!')
}
*/

/*10 

const userPassword = prompt ('Enter password')
if (
    (userPassword.length >=8) &&
    (userPassword.length <=20) &&
    (userPassword. includes ('@') ) &&
    (userPassword. includes ('#') ) &&
    (userPassword. includes ('$') ) &&
    (userPassword. includes ('%') ) 
    
)
 alert ('Valid!')
 else
 alert ('Not valid!')

 */

 
 
 /*11

const userYear = + prompt ('Введите год!')

if (userYear <= 0 ) {
    alert ('Число должно быть больше нуля')
}
else if (userYear % 400 == 0) {
    alert (' высокосный')
}
else if (userYear % 4 == 0 && userYear % 100 != 0  ) {
    alert ('высокосный')
}

else {
    alert (' невысокосный ')
}

*/
