const data = require('../data/zoo_data');

const { species, employees } = data;
// console.log(species[0].residents);
function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const cuidaDe = employees.find((employee) => id === employee.id);

  const especiesCuidadas = cuidaDe.responsibleFor.map((animalID) => species.filter(
    (specie) => specie.id === animalID,
  ));
  const animaisCuidados = especiesCuidadas[0][0].residents;
  const maisVelho = animaisCuidados.reduce((acc, animal) => (acc.age > animal.age ? acc : animal));
  const result = [];
  const { name, sex, age } = maisVelho;
  result.push(name, sex, age);
  return result;
}
console.log(getOldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));
module.exports = getOldestFromFirstSpecies;
