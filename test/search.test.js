const search = require('../server/search');
const test = require('tape');

test('the function returns an array', (t)=>{
    t.equal(Array.isArray(search('a')), true)
    t.end();
})

test('return array returns just strings',(t)=>{
    const actual = search("Po").every(item=>typeof item==='string');
    t.equal(actual,true)
    t.end();
})

// my test

test('Sarah - return array returns just strings',(t)=>{
    const searchArray = search("Po");
    const isThisAString = (item) => {
      return typeof item === 'string';
    }
    const doesSearchArrayContainAllStrings = searchArray.every(item => isThisAString(item))

    t.equal(doesSearchArrayContainAllStrings, true)
    t.end();
})


test('should return empty array if empty string passed',(t)=>{
    const actual=search('');
    t.deepEqual(actual,[]);
    t.end();
})

test('none of the strings returned should be empty',(t)=>{
    const actual=search('po').every(item=>item!=='');
    t.equal(actual,true);
    t.end();
})

test('should return real answer for "Po"',(t)=>{
    const actual=search('Po');
    t.deepEqual(actual,["Poland","Portugal"]);
    t.end();
})
test('should return real answer for "Ja"',(t)=>{
    const actual=search('Ja');
    t.deepEqual(actual,["Jamaica","Japan"]);
    t.end();
})
test('should return real answer for other cases like lowercase "ja"',(t)=>{
    const actual=search('ja');
    t.deepEqual(actual,["Jamaica","Japan"]);
    t.end();
})
test('should return real answer for other cases like mixted lowercase "ja"',(t)=>{
    const actual=search('jA');
    t.deepEqual(actual,["Jamaica","Japan"]);
    t.end();
})
