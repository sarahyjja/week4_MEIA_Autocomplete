const search = require('../server/search')
const test = require('tape')

test('the function returns an array', (t)=>{
    t.equal(Array.isArray(search('a')), true)
    t.end();
})

test('return array returns just strings',(t)=>{
    const actual=search("Po").every(item=>typeof item==='string');
    t.equal(actual,true)
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