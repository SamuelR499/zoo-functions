const data = require('../data/zoo_data');

const { employees } = data;
// console.log(employees);

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  return employees.find(
    (trabaiador) => trabaiador.firstName === employeeName || trabaiador.lastName === employeeName,
  );
}

console.log(getEmployeeByName('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

module.exports = getEmployeeByName;
