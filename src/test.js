/* const delay = ms => {
	return new Promise(r => setTimeout(() => r(), ms))
}

const url = 'https://jsonplaceholder.typicode.com/todos/1' */

/* function fetchTodos() {
	console.log('fetchTodo started')
	return delay(2000)
		.then(() => fetch(url))
		.then(response => response.json())
}

fetchTodos().then(data => {
	console.log(data)
})
 */

/* async function fetchAsyncTodos() {
	console.log('fetchTodo started')
	try {
		await delay(2000)
		const respone = await fetch(url)
		const data = await respone.json()
		console.log(data)
	} catch (e) {
		console.log(e,'Pizdos')
	}
}

fetchAsyncTodos() */