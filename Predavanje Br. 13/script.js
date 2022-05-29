// // ? Pristupanje elementu preko ID-ja
// let mojNaslov = document.getElementById('naslov')

// // ? Promena sadrzaja unutar elementa
// mojNaslov.innerHTML = 'Javascript '

// // ? Promena CSS-a elementa
// mojNaslov.style.color = 'red'

// // ? Menjanje bilo kog atributa HTML taga
// mojNaslov.setAttribute('class','title')


// // * ZADATAK 1
// // - Kreiraj paragraf preko JS-a
// // - Dodeli mu klasu user-title
// // - Ubaci taj paragraf u div sa ID-jem users

// let usersContainer = document.getElementById('users')

// // ? Kreiranje elementa preko JS-a
// let myParagraph = document.createElement('p')
// myParagraph.innerHTML = "Ovo je lista korisnika"
// myParagraph.setAttribute('class', 'user-title')

// // ? Ubacivanje kreirano HTML elementa u sam DOM
// usersContainer.appendChild(myParagraph)

// // * ZADATAK 2
// let usersList = [
//     {
//         name: "Martin",
//         years: 25
//     },
//     {
//         name: "Petar",
//         years: 24
//     },
//     {
//         name: "Marko",
//         years: 28
//     },
// ]
// // ? Proci kroz niz usersList, kreirati button element 
// // ? za svakog korinika i u njega upisati ime korisnika
// // ? Sve te button elemenete ubaci u usersContainer
// // ? RESENJE:
// usersList.forEach(user=>{
//     let button = document.createElement('button')
//     button.innerHTML = user.name
//     usersContainer.appendChild(button)
// })



const myUlList = document.getElementById('my-ul-list')
// ? Pristup svim elementima po imenu TAGA
let listItems = myUlList.getElementsByTagName('li')



for (const item of listItems) {
    // if(item.innerHTML === 'Item 2'){
    //     // ? Uklanjanje HTML elementa iz DOM strukture
    //     myUlList.removeChild(item)
    // }

    if(item.innerHTML === 'Item 3'){
        let newButton = document.createElement('button')
        newButton.innerHTML = 'OVO JE ZAMENJENI ELEMENT'
        // ? Zamena elementa drugim HTML elementom
        myUlList.replaceChild(newButton, item)
    }
}

// ? Pristup elementima sa odredjenom klasom
const allTextClasses = document.getElementsByClassName('text')

console.log(allTextClasses)

for(let i = 0; i < allTextClasses.length;i++){
    allTextClasses[i].style.color = 'red'
    allTextClasses[i].style.textAlign = 'center'

    console.log(allTextClasses[i])
}

