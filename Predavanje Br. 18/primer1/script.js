let inputWidth = document.getElementById('input-width')
let inputHeight = document.getElementById('input-height')
let inputFilters = document.getElementById('input-filters')
let generateBtn = document.getElementById('generate-btn')
let randomImage = document.getElementById('random-img')

generateBtn.addEventListener('click', ()=>{
    let imageUrl = `https://picsum.photos/${inputWidth.value}/${inputHeight.value}${inputFilters.value}`

    randomImage.setAttribute('src',imageUrl)
    // randomImage.src = imageUrl
})