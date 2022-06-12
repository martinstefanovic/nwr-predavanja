// // * Upis u local storage
// localStorage.setItem('user','Martin')
// // * Citanje iz local storage
// let trenutniKorisnik =  localStorage.getItem('user')




// * TASK LIST
const input = document.getElementById('inputText');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('taskLists')

let taskLists = []

let localStorageList = JSON.parse(localStorage.getItem('tasks'))

localStorageList?.forEach((task)=>{
    createTask(task.text)
})

// * Add task
addBtn.addEventListener('click',()=>{
    createTask(input.value)
})


function createTask(textValue){
    if(textValue === ''){
        return
    }

    // * Create task
    let task = document.createElement('li')
    task.className = 'mb-1'
    // * Create span
    let text = document.createElement('span')
    text.innerText = textValue
    // * Create delete btn
    let deleteBtn = document.createElement('button')
    deleteBtn.innerText = 'Remove';
    deleteBtn.className = 'bg-red-50 text-red-500 p-1 text-sm rounded-md ml-2'
    // * Reset input filed
    input.value = ''

    // * Add event listener to delete button
    deleteBtn.addEventListener('click', (event)=>{

        // * Remove task from tasks list array
        taskLists = taskLists.filter(task=>{
            return task.text !== event.target.parentElement.getElementsByTagName('span')[0].innerText
        })

        // * Remove task HTML element
        event.target.parentElement.remove()

        // * Save all tasks to local stoage
        localStorage.setItem('tasks', JSON.stringify(taskLists))
    })

    // * Append text & deleteBtn to task element
    task.appendChild(text)
    task.appendChild(deleteBtn)

    // * Append task to all tasks
    list.appendChild(task)

    // * Add task to array
    taskLists.push({
        text: textValue
    })

    // * Save all tasks to local stoage
    localStorage.setItem('tasks', JSON.stringify(taskLists))
}
