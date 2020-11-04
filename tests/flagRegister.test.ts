const tap = require('tap')
import { FlagRegister, RegisterMap } from '../src/memory/flagRegister'

tap.test('Motorolla 6502', (t: any) => {
    const flagMap: RegisterMap[] = [
        {
            idx: 1,
            name: 'A',
            
        },
        {
            idx: 3,
            name: 'test',
        }
    ]
    let register: FlagRegister
    t.doesNotThrow(() => { register = new FlagRegister(8, flagMap)})
    t.equal(typeof register!, "object")
    t.throws(() => { register!.getFlag('D') }, /Flag D was not found/)
    t.equal(register!.getFlag('test'), false)
    t.end()
})