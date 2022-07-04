
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString)
const userId = urlParams.get('userId')

const singleUserElement = document.getElementById('single-user')

getOneUser(userId)

function getOneUser(userId){
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then( response =>{
            return response.json()
        })
        .then( json =>{
            console.log('OVO JE JEDAN KORSNIK', json)
            createUser(json)
        })
}

function createUser(user){
    const userContainer = document.createElement('div')
    userContainer.classList = 'bg-slate-50 p-4 m-4'
    // Name & username
    const userNameElement = document.createElement('h2')
    userNameElement.innerText = `${user.name} - @${user.username}`
    userNameElement.classList = 'text-2xl font-medium mb-1'
    // Email
    const userEmailElement = document.createElement('p')
    userEmailElement.innerText = `Email: ${user.email}`
    // Company
    const userCompanyElement = document.createElement('p')
    userCompanyElement.innerText = `Company: ${user.company.name}`

    // Append to user container
    userContainer.appendChild(userNameElement)
    userContainer.appendChild(userEmailElement)
    userContainer.appendChild(userCompanyElement)

    // Append to user div
    singleUserElement.appendChild(userContainer)
}