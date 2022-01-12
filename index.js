console.log("Labas vakaras");

const a = 5;
const b = 7;
const c = a + b;
console.log("Suma:", c);

// a+b
// b+c
// c+a

//Rezultata pateikti tokiu sablonu:
//Skaiciaus [a] ir skaiciaus [b] suma yra lygu [suma].

console.log("Skaiciaus [a] ir skaiciaus [b] suma yra lygu [suma].");

console.log(`Skaiciaus ${a} ir skaiciaus ${b} suma yra lygu ${a + b}.`);

const a1 = [10, 8, 2, 4];
const a2 = [1, 3, 5, 7, 9];
const a3 = [147, 258, 359, 123, 456, 789];

// Rezultata pateikti tokiu sablonu;
// Skaiciu masyvas, kuri sudaro [kiekis] skaiciai, vidurkis yra [vidurkis]

// let suma = 0;
// let vidurkis;

// a1.forEach((e) => {
//   suma += e;
// });
// vidurkis = suma / a1.length;
// console.log(
//   `Skaiciu masyvas, kuri sudaro ${a1.length} skaiciai, vidurkis yra ${vidurkis}`
// );

function vidurkis(array) {
  let suma = 0;
  array.forEach((e) => {
    suma += e;
  });

  const vidurkis = suma / array.length;

  console.log(
    `Skaiciu masyvas, kuri sudaro ${array.length} skaiciai, vidurkis yra ${vidurkis}`
  );
}

vidurkis(a1);
vidurkis(a2);
vidurkis(a3);

// Rezultata pateikti tokiu sablonu:
// Legendines asmenybes [Vardas] [Pavarde] trumpinys yra [V.P.]

// const word = s1.split(" ");
// console.log(word);

// const pirmaVardoRaide = word[0][0].toUpperCase();

// console.log(pirmaVardoRaide);

// const pirmaPavardesRaide = word[1][0].toUpperCase();

// console.log(pirmaPavardesRaide);

// console.log(
//   `Legendines asmenybes ${word[0]} ${word[1]} trumpinys yra ${pirmaVardoRaide}. ${pirmaPavardesRaide}.`
// );
const s1 = "mike Pukuotukas";
const s2 = "Chuck Norris";
const s3 = "Wonder WomaN";
const s4 = "Algimantas Cekuolis";

function inicialai(pavadinimas) {
  const word = pavadinimas.split(" ");
  const pirmaVardoRaide = word[0][0].toUpperCase();
  const pirmaPavardesRaide = word[1][0].toUpperCase();

  console.log(
    `Legendines asmenybes ${word[0]} ${word[1]} trumpinys yra ${pirmaVardoRaide}. ${pirmaPavardesRaide}.`
  );
}

inicialai(s1);
inicialai(s2);
inicialai(s3);
inicialai(s4);

// [Vardas] [Pavarde] yra [amzius] amziaus.

const people = [
  { name: "Jonas", surname: "Jonaitis", age: 99 },
  { name: "Maryte", surname: "Marytaite", age: 87 },
  { name: "Onyte", surname: "Oniene", age: 69 },
];

function introduce(person) {
  console.log(
    `${person.name} ${person.surname} yra ${person.age} metu amziaus.`
  );
}

//for of

for (const person of people) {
  introduce(person);
}

//for

for (let i = 0; i < people.length; i++) {
  const person = people[i];
  introduce(person);
}

//while - pirma išsiaiškina, ar reikia daryti, gali būti ir be operacijų

let iw = 0;
const whileSize = people.length;

while (iw < whileSize) {
  const person = people[iw];
  introduce(person);
  iw++;
}

//do... while   do while - padarys BENT VIEN1 operaciją
let idw = 0;
const dowhileSize = people.length;

do {
  const person = people[idw];
  introduce(person);
  idw++;
} while (idw < dowhileSize);

//for in - skirtas objektams

for (const i in people) {
  const person = people[i];
  introduce(person);
}

//forEach

people.forEach((person) => {
  introduce(person);
});
