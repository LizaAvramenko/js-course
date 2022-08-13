
// 1.

// const userBob = {
// 	name: 'Bob',
// 	age: 21,
// 	gender: 'male',
// 	married: false,
// }

// delete userBob.age
// userBob.gender = 'female'
// userBob.pets = [{name: 'Rich',age: 5, classOfAnimal: 'dog'}]

// console.log(userBob)

//2


// const isPlainObject = (element) => typeof element === 'object' && !Array.isArray(element) && element !== null;


// const data = { a: 1 };
// console.log(isPlainObject(data));

// 3. Напишите функцию, которая возвращает новый объект без указанных значений. первый параметр obj второй массив свойств которые мы удалим
// getObjWithout({ a: 1, b: 2 }, ['b']) => { a: 1 }

// const userObject = {
//     a: 1,
//     b: 2,
// }

// delete userObject.b

// console.log (userObject)


// const object = {
//         a: 1,
//         b: 2,
//         c: 3
//     };

// function newObject(obj, prop) {
//     let objectClone = {...obj};
//     delete objectClone[prop];
//     return objectClone;
// }

//     console.log (newObject(object, 'b'))

//4


// function areEqualShallow(a, b) {
//     for(var key in a) {
//         if(a[key] !== b[key]) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log (areEqualShallow({ a: 1, b: 2 }, { a: 1, b: 2 }))

//5

// let arr = [1, 24, 'Bob', true, null, { name: 'Sam', age: 10 }, 5];

// function createObj (array) {
//     let obj = {};
//     array.forEach((item, index) => {
//     obj['index'+index]=item
        
//     });
//     return obj
// }

// console.log (createObj (arr))

//6

// const users = [
//     	{ name: 'Bob', age: 20 },
//     	{ name: 'Sam', age: 10 },
//     	{ name: 'Anna', age: 29 },
//     	{ name: 'Jim', age: 15 },
//     	{ name: 'Alex', age: 45 },
//     	{ name: 'Mick', age: 23 },
//     ];



//     function sortByAge (array, property) {
// let result = []
//         for (let keys of array) {
//      if (property in keys) {
//        result = array.sort((a, b) => a[property] > b[property] ? 1 : -1);
//        return result
// } else {
//     return array
// }
//             }
          
//         }
        
//        console.log(sortByAge(users, 'vbnvhjfj'))



//7

// const users = [
//     { name: 'Bob', age: 20 },
//     { name: 'Sam', age: 10 },
//     { name: 'Anna', age: 29 },
//     { name: 'Jim', age: 15 },
//     { name: 'Alex', age: 45 },
//     { name: 'Mick', age: 23 },
// ];

// let json = JSON.stringify(users, null, 5);
// console.log (json)

//8

const userBob = {
	name: 'Bob',
	age: 21,
	gender: 'male',
	married: false,
	pets: [{name: 'Rex', age:10}, {name: 'Ron', age: 3}],
	breaks: ['11:00', '17:00'],
	favoriteMovie: {
		name: 'Avatar',
		year: 2009,
		info: {
			country: 'USA',
			director: 'James Cameron'
		}
	}
}


// let clone = JSON.parse(JSON.stringify(userBob))
let clone = {...userBob}

for (let key in clone ) {
    delete clone[key]
}

console.log (clone)