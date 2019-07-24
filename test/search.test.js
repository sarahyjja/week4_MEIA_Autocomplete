const search = require('../server/search')
const test = require('tape')

test('the function take a string and return an array', function(t){
    t.equal(search(''), typeof [])
})
