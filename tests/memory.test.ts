// test/hello-world.js
const tap = require('tap')
import {Memory} from '../src/memory'

tap.test('Memory', function(t: any) {
    t.throws(function() {new Memory(9001)}, /Amount of memory not divisable by 8/)

    t.doesNotThrow(function() {new Memory(9000)})

    const dummyMemory = new Memory(1000)

    t.throws(function() {dummyMemory.set(9001, 0xd2)}, /Index outside of memory area/)

    t.throws(function() {dummyMemory.set(-12, 0xa2)}, /Index outside of memory area/)

    t.equals(dummyMemory.get(20), 0x0)

    t.doesNotThrow(function() {dummyMemory.set(20, 0x4c)})

    t.equals(dummyMemory.get(20), 76)

    t.end()
})

