const tap = require('tap')

import { Register} from '../src/memory/register'

tap.test('Register', function(t: any) {
    t.doesNotThrow(function() {new Register(8)})
    t.doesNotThrow(function() {new Register(16)})
    t.doesNotThrow(function() {new Register(32)})
    t.doesNotThrow(function() {new Register(64)})
    t.throws(function() {new Register(128)}, /Register size must be one of \[8, 16, 32, 64\]/)
    t.throws(function() {new Register(42)}, /Register size must be one of \[8, 16, 32, 64\]/)
    t.throws(function() {new Register(-3)}, /Register size must be one of \[8, 16, 32, 64\]/)
    t.end()
})