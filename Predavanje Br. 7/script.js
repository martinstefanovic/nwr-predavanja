// * number => 0
// * string => '123'
// * object => { name: 'Martin' }
// * array => [1,'jabuka',43]
// * boolean => true/false


let godineKorsnika = 6

// ? IF 
// if(godineKorsnika > 18){
//     console.log('DOBRODOSLI!')
// }

// ? IF - ELSE
// if(godineKorsnika > 18){
//     // Ovo se izvrsava samo ako je tvrdnja u if 
//     // naredbi tacna
//     console.log('DOBRODOSAO NA SAJT')
// }else{
//     // Ovo se izvrsava samo ako tvrdnja iz if 
//     // naredbe nije tacna
//     console.log('VAMA JE ZABRANJEN PRISTUP')
// }

// ? IF - ELSE IF - ELSE
// if(godineKorsnika == 16){
//     console.log('Za vas imamo 50% popusta!')
// }else if(godineKorsnika == 17){
//     console.log('Za vas imamo 20% popusta!')
// }else if(godineKorsnika < 10){
//     console.log('Za vas nemamo popust!')
// }else{
//     console.log('Za vas imamo 5% popusta!')
// }

// let broj = prompt('Unesite vas broj')

// console.log(broj)



let racunUbanci = 1000;

let iznosZaTrosenje = +prompt('Unesi iznos koji zelis da potrosis')

console.log('Ovo je uneta vrednost:',iznosZaTrosenje)



function oduzmiNovac(trenutnaKolicina, iznosZaTrosenje){
    let razlika = trenutnaKolicina - iznosZaTrosenje

    if(typeof iznosZaTrosenje != 'number' || isNaN(iznosZaTrosenje)){
        document.write('Vas unos nije broj!')
    }else if(razlika > 0){
        document.write(`Ostalo vam je: ${razlika} dinara`)
    }else{
        document.write(`Nema dovoljno novca. Fali vam: ${razlika} dinara`)
    }
}


oduzmiNovac(racunUbanci, iznosZaTrosenje)



// ? Da li je 10 jednako 10 ili da li je 5 jedanko 5
// * Ako je barem jedan iskaz tacan izvrsi kod
if(7 == 10 || 5 == 5 ){
    console.log('BAREM JEDAN ISKAZ JE TACAN')
}

// ? Da li je 'pera' jedanko 'pera' i da li je 10 vece od 5
// * Ako su oba iskaza tacna izvrsi kod
if('pera' == 'pera' && 10 > 5000 ){
    console.log('OBA ISKAZA SU TACNA')
}