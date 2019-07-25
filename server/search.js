const data = require('../data/data');
const search = (term) => {
    if (term===''){
        return [];
    }
    
    return data.filter(country=>{
        let countryLowerCase=country.toLowerCase()
        let termLowerCase=term.toLowerCase();
        return (countryLowerCase.startsWith(termLowerCase)&&termLowerCase!==countryLowerCase)
    })
}
module.exports=search;