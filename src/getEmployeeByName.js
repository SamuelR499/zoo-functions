const data = require('../data/zoo_data');

const { employees } = data;
// console.log(employees);

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }

  const findEmploye = employees.find((trabaiador) => {
    if (trabaiador.firstName === employeeName || trabaiador.lastName === employeeName) {
      return trabaiador;
    }
    return false;
  });
  return findEmploye;
}

console.log(getEmployeeByName('e'));

module.exports = getEmployeeByName;
