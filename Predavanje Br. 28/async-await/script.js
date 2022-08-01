
getTask()

async function getTask(){
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let json = await response.json()


    console.log(json)
}