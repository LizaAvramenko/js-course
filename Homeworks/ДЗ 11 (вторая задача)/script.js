// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

// 2. Я открываю окно. Вижу кнопку "Get user". Нажимаю на кнопку.
// Снизу на странице появляется информация о юзере и кнопка "Get posts" Конпка "Get users" становится неактивной. (Клик невозможен)
// Наживаю на кнопку "Get posts".cнизу появляется перечень постов юзера. (title and body). Около кпонки "Get posts" добавляется кнопка "Get comments". "Get posts" становится неактивной.
// Нажимаю на "get coments" к постам добавляются коментарии в виде упорядоченного списка. Кнопка становиться неактивной.


const root = document.querySelector('.root')

function createButton (text, id, className) {
const button = document.createElement('button')
button.innerText = text
button.id = id
button.classList.add(className)
root.appendChild(button)
return button
}
const button = createButton('getUser', '1', 'button')
console.log(button)


button.addEventListener('click', getUser)

function getUser () {
    this.disabled = true
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((res) => res.json())
    .then((res) => {
        const div = document.createElement('div')
        console.log(res.toString())
        div.classList.add('text')
        div.innerText = JSON.stringify(res)
        document.body.appendChild(div)
    })
    .then(() => {
        const buttonPost = createButton('getPost', '2', 'button')
        const buttonConteiner = document.createElement('div')
        buttonConteiner.id = 'conteiner'
        document.body.appendChild(buttonConteiner)
        buttonConteiner.appendChild(buttonPost)
        buttonPost.addEventListener('click', getPost)
    })
}

function getPost() {
    this.disabled = true
    fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
    .then((res) => res.json())
    .then((res) => {
        const div = document.createElement('div')
        console.log(res.toString())
        div.classList.add('text')
        div.innerText = JSON.stringify(res)
        document.body.appendChild(div)
    })
    .then(() => {
        const buttonConteiner = document.getElementById('conteiner')
        const buttonComments = createButton('getComments', '3', 'button')
        buttonConteiner.appendChild(buttonComments)
        buttonComments.addEventListener('click', getComments)
    })
}

function getComments() {
    this.disabled = true
    fetch('https://jsonplaceholder.typicode.com/comments?postId=1&postId=2&postId=3&postId=4&postId=5&postId=6&postId=7&postId=8&postId=9&postId=10')
    .then((res) => res.json())
    .then((res) => {
        const div = document.createElement('div')
        console.log(res.toString())
        div.classList.add('text')
        div.innerText = JSON.stringify(res)
        document.body.appendChild(div)
    })
}