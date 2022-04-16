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

// console.log(getEmployeeByName());

module.exports = getEmployeeByName;
