// test/hello-world.js
const tap = require('tap')
import {Memory} from '../src/memory'

tap.test('Memory', function(t: any) {
    t.throws(function() {new Memory(9001)})

    t.doesNotThrow(function() {new Memory(9000)})
    t.end()
})

