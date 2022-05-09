
// let kurs = 'Napredni Web Razvoj';

// * For petlja
// for(let i = 0; i < 10 ; i = i+1){
//     console.log(`Index je: ${i}`)
// }




// * Stampanje clanova niza
// let niz = ['jabuka','banana','lubenica']

// for(let i = niz.length-1; i>=0; i = i-1 ){
//     console.log('Clan niza je: ',niz[i])
// }



// * Stampaj sve neparne brojeve
// function stampajNeparneBrojeve(odBroja, doBroja){
//     for(let i=odBroja; i < doBroja;i=i+1){
//         if(i%2!=0){
//             console.log(i)
//         }
//     }
// }
// stampajNeparneBrojeve(10, 20)



// * ZADATAK:
// ? 1. Korsnik unosi broj preko prompt-a
// ? 2. Proveravamo da li je uneo broj ili NaN
// ? 3. Ako je uneo broj proveravamo da li je paran
// ? 4. Ako je taj broj paran smestamo ga u niz
// ? 5. For petalj se izvrsava dok god niz
// ?    ne dobije 5 elemenata

// let niz = []

// for(let i=0 ; niz.length < 5 ; i=i+1){
//     let broj = prompt('Unesi clan niza')
//     if(broj === ''){
//         console.log('UNESITE NEKI BROJ')
//         continue // Preskace trenutnu iteraciju u petlji
//         // break // Prekida celu petlju
//     }else{
//         broj = +broj
//     }
    
//     if(isNaN(broj)){
//         console.log('UNETA VREDNOST NIJE BROJ')
//     }else{
//         if(broj % 2 === 0){
//             niz.push(broj)
//         }
//     }
// }



// * ZADATAK 
// ? 1. Napisati funkciju koja kao parametar dobija niz
// ? 2. Svakom clanu niza dodaje rec 'IZMENJENO'
// ? 3. Vraca nazad novi niz sa izmenjenim clanovima

// ? BONUS:
// ? Proveriti da li je funkciji prosledjen niz
// ? uz pomocu funkcije Array.isArray(niz)
// ? Ako nije prosledjen niz funkcija vraca kao vrednost
// ? prazan niz

function mapirajNiz(){
    let noviNiz = []

}

// * ZADATAK
// ? 1. Napisati funkciju koja prima 2 parametra
// ? prvi parametar je od kog broja krece for petlja
// ? drugi parametar je DO kog broja se krece for petlja
// ? 2. Funkcija kao rezultat vraca zbir svih brojeva u
// ? tom zadatom opsegu
// ? PRIMER:
// ? zbirOpsega(5,10)

// * ZADATAK
// ? 1. Napisati funkciju koja kao parametar prima
// ?    2 niza iste duzine
// ? 2. U funkciji kreirati novi niz
// ? 3. Napisati for petlju koja prolazi kroz clanove ova
// ?    2 niza i sabira ih prvi sa prvim, drugi sa drugim itd.
// ?    taj zbir smesta u novi niz
// ? PRIMER:
// ? Niz 1: [1,5,9]
// ? Niz 2: [3,5,7]
// ? Novi niz koji funkcija vraca treba da izgleda ovako:
// ? [4,10,16]