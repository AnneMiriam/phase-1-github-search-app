const url = 'https://api.github.com/search/users?q=octocat'
const divMain = document.querySelector('#main');
const form = document.querySelector('#github-form');
const search = document.querySelector('#search');
const userList = document.querySelector('#user-list');
const repoList = document.querySelector('#repos-list');

form.addEventListener('click', (e) => {
    e.preventDefault()
    const h3 = document.createElement('h3')
    const image = document.createElement('img')
    const p = document.createElement('p')
    h3.name = user.login
    image.textContent = user.avatar_url
    p.textContent = user.html_url
    const userData = {
        
        
    }
    fetch (url => {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept: application/vnd.github.v3+json'
        },
        body: JSON.stringify(userData)
    })
    .then(resp => resp.json())
    .then(userArr => {
        renderUser(userArr)
    })
})


    
// function renderUser(e) {
//     userArr.forEach(user => {
//         const h3 = document.createElement('h3')
//         const image = document.createElement('img')
//         const p = document.createElement('p')
//         h3.name = user.login
//         image.textContent = user.avatar_url
//         p.textContent = user.html_url
//         userList.appendChild(h3)
//         userList.appendChild(image)
//         userList.appendChild(p)
//     })
//     renderUser(user)
   
// }
