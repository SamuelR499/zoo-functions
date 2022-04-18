const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// console.log(species[0].name);
const vazioFemaleTrue = species.reduce((acc, specie) => {
  if (Object.keys(acc).includes(specie.location)) {
    acc[specie.location].push(specie.name);
  } else {
    acc[specie.location] = [].push(specie.name);
  }
  return acc;
}, { NE: [], NW: [], SE: [], SW: [] });
// const includesName =

function getAnimalMap(options) {
  // seu código aqui
  if (!options || options.sex === 'female' || options.sorted === true) {
    return vazioFemaleTrue;
  }
  // if (options.includeNames === true) {

  // }
}
console.log(getAnimalMap());
module.exports = getAnimalMap;
