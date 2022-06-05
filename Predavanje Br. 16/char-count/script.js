const button = document.getElementById('count-btn')
const text = document.getElementById('text')
const charCount = document.getElementById('charCount')


button.addEventListener('click',()=>{
    charCount.innerText = text.value.replaceAll(' ', '').length
})