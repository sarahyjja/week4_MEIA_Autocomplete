const data = require("../data/data");

const search = term => {
  if (term === "") {
    return [];
  }

  return data.filter(country => {
    let countryLowerCase = country.toLowerCase();
    let termLowerCase = term.toLowerCase();

    return (
      countryLowerCase.startsWith(termLowerCase) &&
      // !isTermEqualToCountry(termLowerCase, countryLowerCase)

    termLowerCase !== countryLowerCase
    );
  });
};
///////////
// const emptySearch = word => {
//   if(word === ''){
//     return []
//   }
//
// const search = word => {
//
// }
//
// }
//
// const isTermEqualToCountry = (term, country) => {
//   return term === country
// }





module.exports = search;
