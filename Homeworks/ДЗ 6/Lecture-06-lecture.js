// Добавление/удаление свойство
// Передача по ссылке
// Сборщик мусора

// const userBob = {
// 	name: 'Bob',
// 	age: 21,
// 	gender: 'male',
// 	married: false,
// }

// const names = ['Sam', 'Alex']
// userBob.status = 'vip'
// userBob['stat'] = 11
// for (name of names) {
// 	userBob[name] = true
// }

// delete userBob.status
// delete userBob['name']

// userBob.age = 25
// userBob['age'] = 27;
// const age = 'age'
// userBob[age] = 29;


// копия по ссылке

// const userBob = {
// 	name: 'Bob',
// 	age: 21,
// 	gender: 'male',
// 	married: false,
// }

// let copyOfUserBob = userBob
// copyOfUserBob = [19119]
// copyOfUserBob['age'] = 30
// userBob = null
// delete copyOfUserBob.gender
// console.log(userBob, copyOfUserBob)


// клон объекта / поверхностная копия
// Object.assign
// const userBob = {
// 	name: 'Bob',
// 	age: 21,
// 	gender: 'male',
// 	married: false,
// }
// const userSam = {name: 'Sam', status: 'VIP'}

// const copyOfUserBob = Object.assign({}, userSam, userBob)

// copyOfUserBob.gender = 'female'
// copyOfUserBob.status = 'COMMON'

// console.log(userBob, userSam, copyOfUserBob)


// Spread
// const userBob = {
// 	name: 'Bob',
// 	age: 21,
// 	gender: 'male',
// 	married: false,
// 	pet: {
// 		name: 'Rex',
// 		age: 4,
// 	},
// 	arr: [1,2]
// }

// const userSam = {name: 'Sam', status: 'VIP'}
// const copyOfUserBob = {...userBob, isStar: true, ...userSam}
// const copyOfUserBob2 = {...userBob, ...userBob.pet}
// const copyOfUserBob3 = {...userBob, pet: {...userBob.pet}}
// copyOfUserBob.age = 40
// copyOfUserBob.pet.age = 5
// console.log(userBob, copyOfUserBob, copyOfUserBob2, copyOfUserBob3)
// copyOfUserBob.age = 30
// console.log(userBob, userSam, copyOfUserBob)
// const array1 = [1,2,3]
// const copyArr = array1
// const cloneArr = [...array1]

// cloneArr.push(7)
// copyArr.push(6)
// const array2 = [3,4,5]
// const newArray = [...array1.slice(0, 1), ...array2.slice(1,2), true, 'Sam'];
// console.log(array1, cloneArr, copyArr)



// Object.values
// Object.keys
// Object.entries

// const arr = []

// for (prop in userBob) {
// 	arr.push(prop) // Object.keys
// 	arr.push(userBob[prop]) // Object.values
// }
// const keys = Object.keys(userBob)
// const values = Object.values(userBob)
// const entries = Object.entries(userBob)
// const arr3 = [{name: 'Bob'}]
// console.log(entries[5][1][1])
// console.log(arr3[0].name)
// console.log(arr3[0]['name'])
// console.log('arr')
// console.log(entries)


// ?. опциональная цепочка
// console.log(userBob.obj?.age) // obj === 'undefined'
// console.log(userBob.func?.())

// lodash clone() cloneDeep()
// const clone = cloneDeep(userBob)

// JSON (JavaScript Object Notation) — текстовый формат обмена данными, основанный на JavaScript

// const userBob = {
// 	name: 'Bob',
// 	age: 21,
// 	gender: 'male',
// 	married: false,
// 	pet: {
// 		name: 'Rex',
// 		age: 4,
// 	},
// 	time: new Date(),
// 	func: () => true,
// 	non: undefined,
// 	arr: [1,2]
// }

// const json = JSON.stringify(userBob)
// const userBobClone = JSON.parse(json)
// userBobClone.pet.age = 7
// console.log(userBob, userBobClone)
// console.log(userBob.time.getDate(), userBobClone.time.getDate())
// JSON.parse
// JSON.stringify
// console.log(typeof json)
// console.log(JSON.parse(json))

// JSON поддерживает следующие типы данных:

// // Объекты { ... }
// // Массивы [ ... ]
// // Примитивы:
// // строки,
// // числа,
// // логические значения true/false,
// // null.
// // Например:

// // не пропускает
// // Свойства-функции (методы).
// // Символьные ключи и значения.
// // Свойства, содержащие undefined.

// const user1 = {
//   sayHi() {
//     alert("Hello");
//   },
// 	func: function() {},
// 	func1: () => {},
//   [Symbol("id")]: 123,
//   something: undefined
// };

// console.log( JSON.stringify(user1) ); // {} (пустой объект)
