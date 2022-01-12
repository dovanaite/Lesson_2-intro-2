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

// function vidurkis(array)
//     array.forEach((e) => {
//         suma += e;
//       });

//       const vidurkis = suma / array.length;

//       console.log(
//         `Skaiciu masyvas, kuri sudaro ${array.length} skaiciai, vidurkis yra ${vidurkis}`
//       )

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

const jonas = {
  name: "Jonas",
  surname: "Jonaitis",
  age: 99,
};

const maryte = {
  name: "Maryte",
  surname: "Marytaite",
  age: 87,
};

function prisistatymas(vardas) {
  console.log(
    `${vardas.name} ${vardas.surname} yra ${vardas.age} metu amziaus.`
  );
}

prisistatymas(jonas);
prisistatymas(maryte);
