// class Car{

//     constructor(model,year){
//         this.model = model
//         this.year = year
//     }

//     start(){
//         console.log(`Model ${this.model} is started!`)
//     }
//     stop(){
//         console.log(`Model ${this.model} is stopped!`)
//     }
//     controls(direction){
//         console.log(`${this.model} go ${direction}`)
//     }

// }

// // * Kreiranje instanci klase
// let audi = new Car('Audi',2022)
// let bmw = new Car('BMW',2020)

// audi.start()
// bmw.start()
// audi.stop()

// bmw.controls('LEFT')
// bmw.controls('RIGHT')

class Person {
  constructor(nameSurname, year, job) {
    this.nameSurname = nameSurname;
    this.year = year;
    this.job = job;
    this.isTurnOn = false;
  }

  sayMyName() {
    console.log(`My name is: ${this.nameSurname}`);
  }

  calculatePersonYears() {
    let currentYear = new Date().getFullYear();
    console.log(
      `Person ${this.nameSurname} has ${currentYear - this.year} years.`
    );
  }

  set setJob(newJob) {
    this.job = newJob;
  }

  turnOn() {
    if (this.isTurnOn === true) {
      console.log('Telefon je vec upaljen');
    } else {
      this.isTurnOn = true;
      console.log('Telefon je upaljen');
    }
  }
}

let osoba1 = new Person('Petar Petrovic', 1990, 'Graphic designer');

// osoba1.sayMyName()
// osoba1.calculatePersonYears()

// * Pozivanje settera
osoba1.setJob = 'Programmer';

console.log('Posao osobe 1 je:', osoba1.job);

// * ZADATAK 1:
/**
 *
 * Kreirati klasu Phone koja ima sledece parametre:
 * ? Model telefona (string)
 * ? Trajanje garancije (number)
 * ? Godina proizvodnje (number)
 * ? Trenutni procenat baterije (number)
 *
 * Klasa treba da ima sledece funkcije:
 * ? Funkcija turnOn() koja ukljucuje telefon i ispisuje 'Telefon je ukljucen'
 * ? Funkcija turnOff() koja iskljucuje telefon i ispisuje 'Telefon je iskljucen'
 * ? Setter koji menja trenutni procenat baterije
 * ? Funkcija koja proverava da li je istekla garancija 'Garancija ovog telefona je istekla' / 'Ganracija ovog telefona traje jos: 3 godine'
 *
 * ! USLOVI
 * ? Ako je telefon vec upaljen i pokusamo da pozovemo opet funkciju turnOn() treba da se ispise 'Telefon je vec upaljen'
 * ? Ako je telefon ugasen i posamo da pozovemo funkciju turnOff() treba da se ispise 'Telefon je vec ugasen'
 * ? Ako je procenat baterije 0 i pokusamo da pozovemo funkciju turnOn() treba da se ispise 'Baterija telefona je prazna'
 *
 */
