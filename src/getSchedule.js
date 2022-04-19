const data = require('../data/zoo_data');

// const { hours, species } = data;
// const exhibition = species.reduce((acc, specie) => {
//   if (Object.keys(acc).includes(specie.location)) {
//     acc[specie.location].push(
//       { [specie.name]: specie.residents.map((resident) => resident.name) },
//     );
//   } else {
//     acc[specie.location] = [{ [specie.name]: specie.residents.map((resident) => resident.name) }];
//   }
//   return acc;
// }, {});
function getSchedule(scheduleTarget) {
  // seu código aqui
  // return exhibition;
}
console.log(getSchedule());
module.exports = getSchedule;
