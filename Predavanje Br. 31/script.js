// * VARIABLES

let API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en'
let translated = document.getElementById('translated-word')
let izgovor = document.getElementById('izgovor')
let search = document.getElementById('search')
let inputReset = document.getElementById('input-reset')
let inputWord = document.getElementById('search-field')
let playSound = document.getElementById('play-sound')
let audio;

// * EVENT LISTENRES

search.addEventListener('click', ()=>{
    fetch(`${API_URL}/${inputWord.value}`)
    .then(response => response.json())
    .then(res => {
        audio = ''
        console.log(res)
        translated.innerText = res[0].word
        izgovor.innerText = res[0].phonetics[1].text
        audio = new Audio(res[0].phonetics[1].audio)
    })
})
inputReset.addEventListener('click', ()=>{
    inputWord.value = ''
})
playSound.addEventListener('click', ()=>{
    audio.play()
})
