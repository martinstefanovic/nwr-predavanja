

let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let displayCounter = document.getElementById('counter')
let counter = 0;

console.log(displayCounter)

plus.addEventListener('click',()=>{
    counter++;
    displayCounter.innerHTML = counter
})

minus.addEventListener('click',()=>{
    if(counter > 0){
        counter--
        displayCounter.innerHTML = counter
    }
})