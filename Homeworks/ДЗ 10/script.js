// Используя ресурс https://jsonplaceholder.typicode.com/

// Написать функцию getDataWithLogs()
// Эта функция должна делать запрос на какой то URL и возвращать полученные с него данные.
// Так же она должна показывать в консоль следующие сообщения с информаией:
// Запрос на ендпоинт "какой/то/урл" был отправлен
// Ответ был получен
// Длительность запроса составила {посчитанное время}

// Сделайте запрос на /users. Только так чтобы вернулся 1 конкретный пользователь. там есть примеры.

// Потом получите посты для этого юзера

// Потом получите коментарии которые были оставленны для этого поста

// Потом расширьте обьекты постов, добавив в них свойство comments(array of comments) 
// Соответсвенно к каждому посту должны быть добавленны коментарии которые относятся к этому посту

// Потом рассширьте обьект юзера добавив туда массив постов.

// Покажите в консоль финальный результа
// Сделайте две версии. Одна используя promise. Вторая используя async await

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))


function getDataWithLogs(userID) {
    const usersURL = 'https://jsonplaceholder.typicode.com'
    console.log('Запрос на ендпоинт ', usersURL + ' был отправлен.')
    const timeBeforeLoading = new Date().getTime()
    const dataUsers = fetch(usersURL)

    
    dataUsers
        .then(response => { 
            console.log('Ответ был получен')
            const timeAfterLoading = new Date().getTime()-timeBeforeLoading
            console.log('Длительность запроса составила: ', timeAfterLoading + ' ms')
        }) 
        .catch((err)=>console.error(err));

        let user;

        const getOneUser = fetch(usersURL +'/users/' + userID)
        .then(response => response.json())
        .then(userData => user = userData)
        .then(()=>
            fetch(usersURL + '/posts/' + userID)
                .then(response => response.json())
                .then(posts =>
                    fetch(usersURL + '/posts/' + userID + '/comments')
                        .then(response => response.json()) 
                        .then(allComments => {
                            const postsWithComments = [posts].map(post => ({
								...post,
                                comments: allComments.filter(comment => comment.postId === post.id)
                            }))
                            console.log(posts)
                            console.log(allComments)

                            user.posts = postsWithComments
                            console.log ( user )
                        })
                )
                .catch(err => console.error(err))
        )

}

getDataWithLogs(1)

       



// const usersURL = 'https://jsonplaceholder.typicode.com'


// const getDataWithLogs = async (userID) => {
//     try {
//         console.log('Запрос на ендпоинт ', usersURL + ' был отправлен.')
//         const timeBeforeLoading = new Date().getTime();

//         const dataUsers = await fetch(usersURL);
//         await Promise.resolve(console.log('Ответ был получен'));
//         const timeAfterLoading = new Date().getTime()-timeBeforeLoading
//         await Promise.resolve(console.log('Длительность запроса составила: ', timeAfterLoading + ' ms'));
//     } catch (error) {
//         console.error (error)
//     }

//     try
//     {const getOneUser = await fetch(usersURL +'/users/' + userID);
//     const userText = await getOneUser.json();
//     await Promise.resolve(console.log(userText));
//     let user = userText;

//     const getPosts = await fetch(usersURL + '/posts/' + userID);
//     const postText = await getPosts.json();
//     console.log(postText);

//     const getComments = await fetch(usersURL + '/posts/' + userID + '/comments');
//     const commentsText = await getComments.json();
//     console.log(commentsText);

//     const postsWithComments = [postText].map(post => ({
//         ...post,
//         comments: commentsText.filter(comment => comment.postId === post.id)
//     }));

//     user.postText = postsWithComments;
//     console.log(user);
// } catch (error) {
//     console.error(error)
// }

// };

   
// getDataWithLogs(2)

