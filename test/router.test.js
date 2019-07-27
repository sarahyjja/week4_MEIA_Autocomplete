const router = require('../server/router');
const test = require('tape');
const XMLHttpRequest = require('xhr2');
const fs = require("fs");
const path = require("path");
const url = require("url");
const querystring = require("querystring");

// test('if the endpoint start with public the response contains a 200 status', (t) => {
//
//     // var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//     // var XMLHttpRequest = require('xhr2');
//     let xhr = new XMLHttpRequest();
//     xhr.responseText = 'hello'
//     xhr.open("GET", "/public", true)
//     router(xhr)
//
//     t.equal(xhr.responseText, 'hello')
//     // t.equal(Array.isArray(search('a')), true)
//     t.end();
// })
