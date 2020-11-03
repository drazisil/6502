// test/hello-world.js
const tap = require('tap')
const {Memory} = require('../src/memory')

tap.throws(function() {new Memory(9001)})

tap.doesNotThrow(function() {new Memory(9000)})