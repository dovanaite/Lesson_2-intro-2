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

    // const [drinkName, drinkPrice] = drinkDetails;

    // console.log(drinkDetails);

    console.log(
      `Pasirinkimas ${++i}: ${name}, kurio kaina yra ${price} EUR buvo parduota ${count} kiekis ir bendra apyvarta yra ${totalSum.toFixed(
        2
      )}.`
    );
    const a = "584";
    const b = parseInt(a); // <-- "int", kai yra sveikasis skaicius "float" <-- kai skaicius su kableliu
    console.log(typeof a);
    console.log(typeof b);
  }
})();

//Pasirinkimas 1: [gerimo-pavadinimas] kurio kaina yra [kaina] EUR.
