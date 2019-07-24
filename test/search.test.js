const search = require('../server/search')
const test = require('tape')

test('the function returns an array', function(t){
    t.equal(Array.isArray(search('a')), true)
    t.end();
})
