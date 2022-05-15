

// let niz = [1,2,3,4,5,6,7]

// let noviNiz = niz.map(elementNiza =>{
//     if(elementNiza%2 === 0){
//         return elementNiza
//     }else{
//         return 'NEPARAN BROJ'
//     }
// })

// console.log(noviNiz)

// let niz2 = niz.map(elementNiza=>{
//     return elementNiza + 'IZMENJENO'
// })

// console.log(niz2)


// for (let i = 0; i < niz.length; i++) {
//     console.log(niz[i]) 
// }

// niz.forEach(elementNiza=>{
//     console.log('Ovo je element niza: '+elementNiza)
// })

// function test(ime){
//     console.log('OVO JE TEST',ime)
// }

// test('Marko')


// let test2 = ime=>{
//     console.log('OVO JE TEST 2 FUNKCIJA', ime)
// }

// test2('Petar')



// let polazniciKursa = ['Aleksa','Nebojsa','Milan','Marko','Aleksandar']

// polazniciKursa.forEach(polaznik=>{
//     document.write(`<li>${polaznik}</li>`)
// })


let polaznici = [
    {
        name: 'Marko Markovic',
        score: 90
    },
    {
        name: 'Petar Petrovic',
        score: 30
    },
    {
        name: 'Stefan Stefanovic',
        score: 50
    }
]

// * ZADATAK 1
// ? Mapirati niz tako da kod svih polaznika
// ? koji imaju manje od 50 score name bude 'IZBACEN'
// ? Novi mapirani niz odstampati kroz document.write
// ? na stranici kao listu


let noviNizPolaznika = polaznici.map(polaznik=>{
    if(polaznik.score < 50){
        return {
            name: 'IZBACEN',
            score: polaznik.score
        }
    }else{
        return polaznik
    }
})

noviNizPolaznika.forEach(polaznik=>{
    console.log(polaznik)
    document.write(`<li>Ime:${polaznik.name} Score: ${polaznik.score}</li>`)
})



// * ZADATAK 2
// ? Zadati niz mapirati tako da name za svakog polaznika
// ? bude napisan velikim slovima
// ? POMOC: Potraziti funkciju za konvertovanje stringa u
// ? velika slova
// ? Rezultat: ['MARKO MARKOVIC', 'PETAR PETROVIC'] itd

// * ZADATAK 3
// ? Zadati niz mapirati tako da novi niz ne bude niz objekata
// ? nego niz name stringova
// ? Rezultat: ['Marko Markovic', 'Petar Petrovic'] itd.

// * ZADATAK 4
// ? Mapirati niz brojeva tako da dobijemo novi niz 
// ? brojeva koji su pomnozeni brojem 2
// ? PRIMER NIZA: [1,2,3,4]
// ? REZULTAT: [2,4,6,8]

// * ZADATAK 5
// ? Mapirati niz brojeva tako da dobijemo niz stringova
// ? PRIMER NIZA [1,2,3,4]
// ? REZULTAT: ['1','2','3','4']
// ? POMOC: Potraziti na google-u funkciju za konvertovanje
// ? u string

let btns = []

for (let i = 0; i < 5; i++) {
    let el = document.createElement('button')
    el.innerText = 'Klikni me' + i
    btns.push(el)
}

console.log(btns)

btns.forEach((btn,index)=>{
    btn.addEventListener('click',e=>{
        e.target.remove()
    })
    document.body.appendChild(btn)
})