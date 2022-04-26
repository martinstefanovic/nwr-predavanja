// ? Prvi nacin za kreiranje varijable
// Definisanje varijable
let broj;
// Dodeljivanje vrednosti varijabli
broj = 23;

// ? Drugi nacin za kreiranje varijable
const omiljeniBroj = 5;
let ime = 'Martin';

// ? Stampanje vrednosti iz javascript-a
// console.log('Pozdrav iz Javascripta', ime)
// ? Stampanje varijable iz javascript-a
//console.log(broj)
// ? Kombinovanje vrednosti
//console.log('Moj omiljeni broj je: ',omiljeniBroj)

// ? Sabiranje: +
// ? Oduzimanje: -
// ? Mnozenje: *
// ? Deteljnje: /
let rezultat = ime + 5;

console.log('Rezultat je:', rezultat);

console.log(omiljeniBroj);

// omiljeniBroj = 15

console.log('Omiljeni broj', omiljeniBroj);

/*
 Pisanje komentara
 sa vise redova
*/

// Pisanje komentara u jednom redu

let car = {
  year: 2010,
  brand: 'Audi',
  model: 'a4',
  isCarStarted: true,
  start() {
    console.log('Auto je upaljen');
  },
  stop() {
    console.log('Auto je ugasen');
  },
  controls: {
    left() {
      console.log('Skrenuli smo levo');
    },
    right() {
      console.log('Skrenuli smo desno');
    },
  },
};
