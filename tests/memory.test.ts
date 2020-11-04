// test/hello-world.js
const tap = require('tap')
import {Memory} from '../src/memory'

tap.test('Memory', function(t: any) {

    t.doesNotThrow(function() {new Memory(9000)})

    let dummyMemory = new Memory(1000)

    t.throws(function() {dummyMemory.set16(9001, 0xd2)}, /Index outside of memory area/)

    t.throws(function() {dummyMemory.set16(-12, 0xa2)}, /Index outside of memory area/)

    dummyMemory = new Memory(10)
    
    t.equals(dummyMemory.get16(4), 0x0)

    t.doesNotThrow(function() {dummyMemory.set16(4, 0x4c)})

    t.equals(dummyMemory.get16(4), 76)

    t.end()
})

