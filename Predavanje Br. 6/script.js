// * NIZOVI
// let voce = ["jabuka","banana","kruska"]
// let brojevi = [5,12,15,20]
// let zaposleni = [
//     {
//         name: "Martin",
//         surname: "Stefanovic"
//     },
//     {
//         name: "Petar",
//         surname: "Petrovic"
//     },
//     {
//         name: "Marko",
//         surname: "Markovic"
//     }
// ]
// let razno = [10,15,"jabuka",50, {name: "Petar"}]
// let nizovi = [[2,4,6],[1,3,5]]


// * RAD SA NIZOVIMA
let voce = ['Jabuka', "Banana", "Kruska"]
// Pristupanje clanu niza
voce[1] = "Lubenica"
// Ubacivanje novog elementa na kraj niza
voce.push('Jagoda')
// Ubacivanje novog elementa na pocetak niza
voce.unshift('Breskva')
// Izbacivanje poslednjeg elementa iz niza
voce.pop()
// Izbacivanje prvog elementa iz niza
voce.shift()

let brojevi = [1,2,3,4,5,6,7,8,9]
// Spajanje dva niza
let noviNiz = voce.concat(brojevi)
// Ova funkcija brise clanove niza
// console.log(brojevi.slice(1, 4))
// Dodovanje novo clana na odredjeno mesto
// u nizu
brojevi.splice(2,6, "NOVI CLAN")
// toString() pretvara niz u string
let nizUstring = brojevi.toString()
// Stampanje rezultata u HTML
// document.write(nizUstring)
// let omiljeniBroj = prompt('Unesi svoj omiljeni broj')
// document.write(`Omiljeni broj korisnika je: ${omiljeniBroj}`)


// ? ZADATAK:
// Napraviti u JS niz brojeva
// Pitati korisnika koji mu je omiljeni broj
// Ubaciti taj broj u predhnodno napravljeni
// niz na pocetak niza
// Odstampati sve brojeve u HTML-u


let oBroj = '20'
// Pretvaranje stringa u boj Nacin br 1:
console.log(parseInt(oBroj))
// Pretvaranje stringa u boj Nacin br 2:
console.log(+oBroj)

console.log(`Zbir je: ${+oBroj + 100}`)










// Ubacivanje elementa na odredjenu poziciju u nizu



// ! PRIMER VEZAN ZA KOPIRANJE OBJEKATA
let person = {
  name: 'Martin',
};
// let person2 = Object.assign({ year: 24 }, person);
let person2 = { ...person, year: 24 };

person2.city = 'Nis';
