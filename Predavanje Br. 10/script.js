

// * Deklerisanje funkcije

// const hello = msg => msg

// const hello2 = (msg)=> {msg}

// const hello3 = function(msg){
//     return msg
// }

// function hello4(msg){
//     return msg
// }




// * Date - Tip podataka
// let date = new Date(2022,5,6)
// let date2 = new Date(2022,5,4)
// let date3 = new Date()

// console.log(date3.getDay())

// let broj = 30;

// switch(broj){
//     case 1:
//         console.log('Broj jedan') 
//         break;
//     case 3:
//         console.log('Broj tri')
//         break;
//     case 4:
//         console.log('TACAN BROJ')
//         break;
//     default:
//         console.log('NISI POGODIO BROJ')
// }


// * ZADATAK
// ? Napisati funkciju kojoj kao paarametar prosledjujemo
// ? danasnji dan
// ? Na osnovu tog podatka funkcija vraca string tj. ime
// ? tog dana
// ? String koji funkcija vraca smestiti u posebnu promenjivu
// ? i ispisati u console.log()


// function kojiJeDan(dan){
//     let nazivDana;

//     // if(dan == 0){
//     //     nazivDana = "Nedelja"
//     // }else if(dan == 1){
//     //     nazivDana = "Ponedeljak"
//     // }else if(dan == 2){
//     //     nazivDana = "Utorak"
//     // }else{
//     //     nazivDana = "Kod je neispravan"
//     // }

//     switch(dan){
//         case 0:
//             nazivDana = "Nedelja"
//             break;
//         case 1:
//             nazivDana = "Ponedeljak"
//             break;
//         case 2:
//             nazivDana = "Utorak"
//             break;
//         case 3:
//             nazivDana = "Sreda"
//             break;
//         case 4:
//             nazivDana = "Cetvrtak"
//             break;
//         case 5:
//             nazivDana = "Petak"
//             break;
//         case 6:
//             nazivDana = "Subota"
//             break;
//         default:
//             nazivDana = "Kod je neispravan"
//     }

//     return nazivDana;
// }

// let danasnjiDan = kojiJeDan(new Date().getDay())




// * WHILE PETLJA

// let broj = 10

// while(broj != 0){
//     console.log(`Broj je: ${broj}`)
//     broj = broj - 1;
// }

// console.log(`Nakon while petlje broj je: ${broj}`)

// * ZADATAK
// ? Korisnik preko promt-a unosi sifru od 4 broja
// ? Dok god ne unese pravu sifru
// ? Kada unese pravu sifru u console.log odstampati
// ? USPESNO STE SE PRIJAVILI!
// ? 2323

// const password = '2323'
// let userPassword = ''

// while(userPassword != password){
//     userPassword = prompt('Unesi svoju sifru')
//     if(userPassword == password){
//         console.log('USPESNA PRIJAVA')
//     }
// }


// * DO WHILE

// let broj = 1

// while(broj == 0){
//     broj = broj - 1
// }
// console.log('Broj je: ',broj)


// let broj2 = 1

// do{
//     broj2 = broj2 - 1
// }while(broj2 == 0)
// console.log('Broj dva je: ', broj2 )


// * ZADATAK

// ? Kreiramo promenjivu budzet = 1000
// ? Korisnik unosi koliko zeli da potrosi dok god 
// ? ne predje budzet ispod 0
// ? Ukoliko je nakon poslednje iteracije while petlje
// ? budzet 0 ispisati: "POTROSILI STE SAV NOVAC"
// ? Ukoliko je nakon poslednje iteracije while petlje
// ? budzet manji od 0 ispisati: "USLI STE U MINUS"
// ? Kolicina novca koju trosi korisnik unosi se preko
// ? prompt-a