const data = require('../data/zoo_data');

const { species } = data;
// const leao = species.name;
// const idadeDeZenna = species.residents.age;
// console.log(leao);
function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const getSpicie = species.find((specie) => specie.name === animal);
  const getOlder = getSpicie.residents.every((bixinho) => bixinho.age > age);// se todos bixin tem a idade;
  return getOlder;
}

// console.log(getAnimalsOlderThan('lions', 1));
module.exports = getAnimalsOlderThan;
