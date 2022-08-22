const css = require ('../styles/styles.css')

// 4.
const userName1: string = prompt ('Enter your name!')
const userSurname1: string = prompt ('Enter your surname! ')
alert (userName1+' '+ userSurname1) 
 

//5
function areaRectangle (width: number, length: number):number {
    let area: number = width*length;
    return area;
}
let width: number = 10.83;
let lengthRectangle: number = 8.45;
alert ('Area= '+ areaRectangle(width, lengthRectangle). toFixed(1));



//6
const userName: string = prompt ('Enter your name!');
alert ("Hello"+ ',' + " " + userName)


// 7
const result: number = Math.pow(2, 5);
console.log(result);


//8

const MINIMUM_AGE: number = 20;
const userAge: number = Number(prompt ('Enter your age!'))

if (userAge <= MINIMUM_AGE) {
    alert ( 'Привет!')
}
if (userAge > MINIMUM_AGE) {
    alert ( 'Здравствуйте!')
}


// //9

const userAnswer: number = Number(prompt ('Отгадайте загадку: В семье было два отца и два сына. Сколько это человек?' ));
const requaredAnswer: number = 3 ;

if (userAnswer == requaredAnswer )  {
    alert ('Молодец! Правильный ответ')
}
else { 
    alert ('Неправильный ответ!')
}


//10 

const userPassword: string | number = prompt ('Enter password')
if (
    (userPassword.length >=8) &&
    (userPassword.length <=20) &&
    (userPassword. includes ('@') ) &&
    (userPassword. includes ('#') ) &&
    (userPassword. includes ('$') ) &&
    (userPassword. includes ('%') ) 
    
) {
    alert ('Valid!')
} else {
    alert ('Not valid!')
}
 


//11
const userYear: number = Number(prompt ('Введите год!'))

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


