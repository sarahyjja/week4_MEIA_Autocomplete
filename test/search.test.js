const search = require('../server/search')
const test = require('tape')

test('the function take a string and return an array', assert => {
    const actual = search('')
    const expected = []
    assert.deepEqual(actual, expected)

    assert.end()
});
