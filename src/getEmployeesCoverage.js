const data = require('../data/zoo_data');

const { employees, species } = data;

const foundSpecie = (id) => species.find((specie) => specie.id === id);

const array = [];
const allEmployees = () => {
  employees.forEach(({ id, firstName, lastName, responsibleFor: idAnimal }) =>
    array.push({
      id,
      fullName: `${firstName} ${lastName}`,
      species: idAnimal.map((animal) => foundSpecie(animal).name),
      locations: idAnimal.map((animal) => foundSpecie(animal).location),
    }));
  return array;
};
// console.log(allEmployees());

function getEmployeesCoverage(obj) {
  // seu código aqui
  if (!obj) return allEmployees();
  const xablau = employees
    .find((employee) =>
      employee.firstName === obj.name || employee.lastName === obj.name || employee.id === obj.id);
  if (!xablau) { throw new Error('Informações inválidas'); }
  const { id, firstName, lastName, responsibleFor: idAnimal } = xablau;
  return {
    id,
    fullName: `${firstName} ${lastName}`,
    species: idAnimal.map((animal) => foundSpecie(animal).name),
    locations: idAnimal.map((animal) => foundSpecie(animal).location),
  };
}

// console.log(getEmployeesCoverage());
module.exports = getEmployeesCoverage;
