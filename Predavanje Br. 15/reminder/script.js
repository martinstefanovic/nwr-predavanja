
let inputNote = document.getElementById('input-note')
let saveButton = document.getElementById('save-button')
let resetButton = document.getElementById('reset-button')
let note = document.getElementById('note')


saveButton.addEventListener('click',()=>{
    console.log(inputNote.value)
    note.innerText = inputNote.value
})

resetButton.addEventListener('click',()=>{
    inputNote.value = ''
})