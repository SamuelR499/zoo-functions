const data = require('../data/zoo_data');

const { prices } = data;
const { adult: aPrice, senior: sPrice, child: cPrice } = prices;
const falaDeles = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(entrants) {
  // seu código aqui pra cima deles
  return entrants.reduce((acc, entrant) => {
    if (entrant.age < 18) {
      acc.child += 1;
    } else if (entrant.age > 17 && entrant.age < 50) {
      acc.adult += 1;
    } else if (entrant.age > 49) {
      acc.senior += 1;
    }
    return acc;
  }, { child: 0, adult: 0, senior: 0 });
}
console.log(countEntrants(falaDeles));

function calculateEntry(entrants) {
  //   // seu código aqui
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { child, adult, senior } = countEntrants(entrants);
  // console.log(child, adult, senior);
  const pay = child * cPrice + adult * aPrice + senior * sPrice;
  return pay;
}

console.log(calculateEntry(falaDeles));
module.exports = { calculateEntry, countEntrants };
