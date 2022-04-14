const data = require('../data/zoo_data');

// const animais = data.species
const { species } = data
function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids.length === 0) return [];

  const contem = ids.map((id) => species.find((animal) => animal.id === id))
  return contem;
}

console.log(getSpeciesByIds());

module.exports = getSpeciesByIds;


// function teste (...args){
//   const escolhido =  args.filter( id => {
//   if( id === 'id3'){
//     return id
//   }    

//   });
//   return escolhido[0]
// }

// console.log(teste('id1','id2','id3','id4'));