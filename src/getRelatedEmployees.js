const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// console.log(employees[0].managers);
function isManager(id) {
  // seu código aqui
  return employees.some((employe) => employe.managers.includes(id));
}
// console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));

// ao passar o ID de stephanie procurar seus subordinados.
function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId) === false) { // === false = !==true;
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  try {
    const cabramandado = employees.filter((employe) => (employe.managers.includes(managerId)));
    const cabraPeloNome = cabramandado.map((cabra) => `${cabra.firstName} ${cabra.lastName}`);
    return cabraPeloNome;
  } catch (error) {
    throw error.message;
  }
}
// console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));
// console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
