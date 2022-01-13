const fs = require("fs/promises");

(async () => {
  const drinksContent = await fs.readFile("./data/drinks.txt", "utf-8");
  const drinkList = drinksContent.split("\r\n");

  console.log(drinksContent);
  console.log(drinkList);

  let i = 0;
  for (const drink of drinkList) {
    // const drinkDetails = drink.split(" ");
    // const drinkName = drinkDetails[0];
    // const drinkPrice = drinkDetails[1];
    // const count = drinkDetails[2];
    const drinkDetails = drink.split(" ");
    const [name, price, count] = drinkDetails;
    // const totalSum = parseFloat(count) * parseInt(price);
    const totalSum = +count * +price;
    const precision = 2;
    const b1 = totalSum.toFixed(precision);
    // const b2 = Math.round(totalSum * 100) / 100;

    // const [drinkName, drinkPrice] = drinkDetails;

    // console.log(drinkDetails);

    //.toFixed(2) <-- padaro, kad suapvalintu (2 skaiciai po kablelio)
    console.log(
      `Pasirinkimas ${++i}: ${name}, kurio kaina yra ${price} EUR buvo parduota ${count} kiekis ir bendra apyvarta yra ${b1} EUR.`
    );

    // console.log(
    //   `Pasirinkimas 2 ${++i}: ${name}, kurio kaina yra ${price} EUR buvo parduota ${count} kiekis ir bendra apyvarta yra ${b2} EUR.`
    // );

    const a = "584";
    const b = parseInt(a); // <-- "int", kai yra sveikasis skaicius "float" <-- kai skaicius su kableliu
  }
})();

//Pasirinkimas 1: [gerimo-pavadinimas] kurio kaina yra [kaina] EUR.

const jonas = {
  name: "Jonas",
  lastname: "Jonaitis",
  age: 99,
  childrenCount: 2,
  children: [
    {
      name: "Ona",
      dob: 2002,
    },
  ],
};
