const tap = require('tap')

import { MOS6502 } from '../src/cpu/mos6502'

tap.test('MOS 6502', function(t:any) {
    t.doesNotThrow(function() {new MOS6502()})
    t.end()
})