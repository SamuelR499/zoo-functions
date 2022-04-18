const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// console.log(species[0].name);
const vazioFemaleTrue = species.reduce((acc, specie) => {
  if (Object.keys(acc).includes(specie.location)) {
    acc[specie.location].push(specie.name);
  } else {
    acc[specie.location] = [specie.name];
  }
  return acc;
}, {});
const includesName = species.reduce((acc, specie) => {
  if (Object.keys(acc).includes(specie.location)) {
    acc[specie.location].push(
      { [specie.name]: specie.residents.map((resident) => resident.name) },
    );
  } else {
    acc[specie.location] = [{ [specie.name]: specie.residents.map((resident) => resident.name) }];
  }
  return acc;
}, {});
function getAnimalMap(options) {
  // seu código aqui
  if (!options || options.sex === 'female' || options.sorted === true) {
    return vazioFemaleTrue;
  }
  if (options.includeNames === true) {
    return includesName;
  }
}
console.log(getAnimalMap({ includeNames: true }).NE);

module.exports = getAnimalMap;
