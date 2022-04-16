const { species } = require('../data/zoo_data');
// const data = require('../data/zoo_data');
// console.log(species[0].name);
function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    const animaisRepiditos = species.reduce((acc, specie) => {
      acc[specie.name] = specie.residents.length;
      return acc;
    }, {});
    return animaisRepiditos;
  }
  if (Object.keys(animal).length === 1) {
    const total = species.find((bixin) => bixin.name === animal.specie);
    return total.residents.length;
  }
  if (Object.keys(animal).length === 2) {
    const foundAnimal = species.find((bixin) => bixin.name === animal.specie);
    const maleorFemale = foundAnimal.residents.filter((cada) => cada.sex === animal.sex);
    return maleorFemale.length;
  }
}
// console.log(countAnimals());
module.exports = countAnimals;
