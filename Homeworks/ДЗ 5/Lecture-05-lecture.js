

//Array.forEach()

// const example = (el, index) => console.log('name: ', el.name, 'age: ', el.age, 'index: ', index)
// for (let i = 0; i < users.length; i++) {
// 	example(users[i], i)
// }

// users.forEach((elem, index) => example(elem, index));

// Array.some()
// Array.every()

// const arr = [1, 2, '22'];
// for (let el of arr) {
// 	if (typeof el !== 'number') {
// 		hasNumber = false;
// 		break;
// 	}
// 	hasNumber = true;
// }


// let hasNumber = arr.some((item, indx, arr) => typeof item === 'number');
// const onlyNumbers = arr.every((item) => typeof item === 'number')

// Array.filter()

// const olderThen18 = [];

// for (el of users) {
// 	if (el.age > 18) {
// 		olderThen18.push(el)
// 	}
// }

// const olderThen18 = users.filter((item) => item.age > 100)

// console.log(olderThen18)




// Array.indexOf() для примитивов


// const arr2 = [1, '2', 4, [1,2]]


// const result = arr2.indexOf(4)
// console.log(result)


// const arr3 = [1,2]
// const jim = { name: 'Jim', age: 15 }
// Array.findIndex()
// const index = users.findIndex((item) => item === jim.name && item.age === jim.age)
// console.log(index)
// Array.find()

// const user = users.find((item) => item.name === 'Alex')
// console.log(user)

// Array.includes()

// const pets = ['cat', 'dog', 'rat'];

// const result = pets.includes('dog')

// console.log(result)

// Array.map()

// const newUsers = users.map((el, i) => ({name: el.name, age: el.age, id: i + 1}))

// console.log(newUsers)


// Array.reverse()
// users.reverse()
// console.log( users)



const users = [
	{ name: 'Bob', age: 20 },
	{ name: 'Sam', age: 10 },
	{ name: 'Anna', age: 29 },
	{ name: 'Jim', age: 15 },
	{ name: 'Alex', age: 45 },
	{ name: 'Mick', age: 23 },
];

// Array.reduce()
// Array.reduceRight()

// const totalAges = users.reduce((prev, item, i, arr) => prev  + item.age, 0)
// const middleAge = users.reduce((prev, item, i, arr) => prev  + item.age, 0) / users.length
// const maxAge = users.reduce((prev, item) => prev > item.age ? prev : item.age, 0)
// const maxAge2 = users.reduce((prev, item) => Math.max(prev, item.age), 0)
// const fullInfo = users.reduce((prev, item) => {
// 	return {
// 		allNames: `${prev.allNames}${prev.totalUsers === 0 ? '' : ', '}${item.name}`,
// 		totalAges: prev.totalAges + item.age,
// 		totalUsers: prev.totalUsers + 1,
// 		middleAge: Math.round((prev.totalAges + item.age) / (prev.totalUsers + 1)),
// 	}
// }, {
// 	allNames: 'Все имена: ',
// 	totalAges: 0,
// 	totalUsers: 0,
// 	middleAge: 0,
// })

// console.log(fullInfo)



// COMPOSE редьюс со звездочкой
// const vocabulary = ['firstWord']

// const saveWord = (word) => {
// 	vocabulary.push(word)
// 	return word
// }

// const showTotalWords = (word) => {
// 	console.log(`You saved total: ${vocabulary.length} words`, vocabulary)
// 	return word
// }
// const addPrefix = (word) => `Wow it is a new word: ${word}`
// const addPostfix = (word) => `${word}! Has been saved to our vocabulary`

// const methods = [saveWord, showTotalWords, addPrefix, addPostfix]

// function addNewWord(word) {
// 	const result = methods.reduce((res, method) => method(res), word)

// 	console.log(result)
// }
// addNewWord('Cat')
// const res0 = saveWord('CAT')
// const res3 = showTotalWords(res0)
// const res = addPrefix(res3)
// const res2 = addPostfix(res)
// console.log(res2)
