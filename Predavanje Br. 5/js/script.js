// let person = {
//   name: 'Martin',
//   surname: 'Stefanovic',
//   years: 24,
// };

// person.myJob = 'Frontend Developer';

// Deklerisanje funkcije
// Ovo je funkcija koja ne vraca rezultat
function sabiranje(prviBroj, drugiBroj) {
  // TELO FUNKCIJE
  console.log('Rezultat je:', prviBroj + drugiBroj);
}
// console.log(sabiranje(10,15))

// Ovo je funkcija koja vraca rezultat
function oduzimanje(prviBroj, drugiBroj) {
  let rezultat = prviBroj - drugiBroj;
  return rezultat;
  // Kod ispod kljucne rece return nece
  // biti izvrsen
  console.log('POZDRAV');
}

let razlika = oduzimanje(40, 15) - 10;

// console.log('Razlika je', razlika)

function log(message, bgColor = 'lightgreen') {
  console.log(
    `%c${message}`,
    `color:black;background:${bgColor};font-size:1rem;padding:5px`
  );
}
// log('Pozdrav iz funkcije')
// log('JavaScript','yellow')

let car = {
  brand: 'Audi',
  model: 'a4',
  year: 2015,
  start() {
    log('Auto je pokrenuto.');
  },
  stop() {
    log('Auto je ugasno.', 'red');
  },
  controls(smer) {
    log(`Smer: ${smer}`, 'lightblue');
  },
};

// car.start()
// car.controls('LEVO');
// car.controls('PRAVO')
// car.controls('DESNO')
// car.stop()

// ! ZADATAK ZA DOMACI

// 1. Smisliti ideju za objekat i kreirati objekat
//    sa razlicitim kljucevima
// 2. Objekat treba da ima string, number, funckiju

let osoba = {
  ime: 'Martin',
};

function dodajPrezime(nekiObjekat, novoPrezime) {
  let noviObjekat = Object.assign({}, nekiObjekat);
  noviObjekat.prezime = novoPrezime;

  return noviObjekat;
}

let osoba2 = dodajPrezime(osoba, 'Stefanovic');

console.log(osoba);
console.log(osoba2);

// CamelCase notacija
let myFavouriteJob;

// Snake notacija
let my_favourite_job;
