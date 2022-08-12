
// 2. написать структуру данных очередь.

// const Stack = () => {
// 	const data = [1, 2, 3, 4, 5]

// 	function add(el) {
// 		data.push(el)
// 	}

// 	function remove() {
// 		data.shift()
// 	}
// 	function getData() {
// 		return [...data]
// 	}
// 	return {
// 		add, remove, getData
// 	}
// }

// const stack1 = Stack()
// stack1.add(6)
// stack1.add(7)
// stack1.add(8)
// stack1.remove()
// console.log(stack1.getData())



// 3. написать промис которые с 70 процентной вероятность будет возвращать объект {name: 'Bob', age: 25, gender: 'male', ...} 
//придумайте еще поля , и с 30 процентно будет throw Error() 
//(почитать что такое throw Error)внутри промиса сделайте таймер чтобы имитировать запрос на сервер, 
//при отправке запроса выводим в консоль лог loader - true потом обрабатываем объект минимум 5ью then (пример вывести имя в консоль)
// и обрабатываем ошибку, выведите в консоль свойства объекта Error и после всей обработке выводим в консоль done и loader - false


// function modifyDataUser(ms) {

// const p = new Promise(function(resolve, reject) {
// 	setTimeout(() => {
// 		const user = {
// 			name: 'Bob', 
// 			age: 25, 
// 			gender: 'male',
// 			work: 'driver', 
// 			status: 'married', 
// 			children: true,
// 		};
// 		const result = Math.random();
// 		console.log(result)

// 		if (result < 0.7) {
// 			resolve(user) 
// 		}

// 		reject('Some Error1');
// 	}, ms);
// })

// p
// .then(data=>{
// 	console.log('user: ', data)
// 	return data
// })

// .then(data=>{
// 	return new Promise (resolve => {
// 		setTimeout(()=> {
// 			console.log ('Loading...')
// 			resolve(data)
// 		}, ms)
// 	})
	
// })

// .then(data=>{
// 	console.log('name: ', data.name)
// 	return data
// })

// .then(data=>{
// 	return new Promise(resolve => {
// 		setTimeout(()=> {
// 			console.log ('Status is loading...')
// 			resolve(data.status)
// 		}, ms)
// 	})
// })

// .then(status =>{
// 	console.log('status: ', status)
// })

// .catch(err => console.log(err))

// .finally(() => console.log('The end'))

// }

// modifyDataUser(3000)


// 4. обработать все при помощи асинхронной функции async await


async function modifyDataUser(ms) {

	const p = new Promise(function(resolve, reject) {
		setTimeout(() => {
			const user = {
				name: 'Bob', 
				age: 25, 
				gender: 'male',
				work: 'driver', 
				status: 'married', 
				children: true,
			};
			const randomNum = Math.random();
			console.log(randomNum)
	
			if (randomNum < 0.7) {
				resolve(user) 
			}
	
			reject('Some Error1');
		}, ms);
	})
 
	

	try {
		const result = await p;
	  	const showUser = await Promise.resolve(console.log('user: ', result));
	  	const showStatus = await new Promise (resolve => setTimeout(()=> {
			console.log('Loading...')
			resolve (result.name)
	}, ms));
		const showName = await new Promise (resolve => setTimeout(()=> {
			console.log('name: ', loading)
			resolve()
	}, ms));

	} catch (err) {
			console.error(err)
	}
	finally{
		setTimeout(()=>console.log('The end'), ms)
	}

}

modifyDataUser(3000)


