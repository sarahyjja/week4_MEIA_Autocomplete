const data = require('../data/data');
const search = (term) => {
    if (term===''){
        return [];
    }
    return data.filter(country=>country.toLowerCase().startsWith(term.toLowerCase()))
}
module.exports=search;