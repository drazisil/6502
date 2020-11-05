const tap = require('tap')
import { FlagRegister, RegisterMap } from '../src/memory/flagRegister'

tap.test('Motorolla 6502', (t: any) => {
    const flagMap: RegisterMap[] = [
        {
            name: 'A',
            value: false,
            
        },
        {
            name: 'test',
            value: false,
        }
    ]
    let register: FlagRegister
    t.doesNotThrow(() => { register = new FlagRegister(8, flagMap)})
    t.equal(typeof register!, "object")
    t.throws(() => { register!.getFlag('D') }, /Flag D was not found/)
    t.equal(register!.getFlag('test'), false)
    register!.setFlag('test', true)
    t.equal(register!.getFlag('test'), true)
    t.equal(register!._dump().length, 2)
    t.end()
})