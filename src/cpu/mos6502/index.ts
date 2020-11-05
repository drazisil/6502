import { FlagRegister } from '../../memory/flagRegister'
import { Register} from '../../memory/register'

export class MOS6502 {
    private registers: {
        A: Register,
        X: Register,
        Y: Register,
        S: Register,
        PC: Register,
        FLAGS: FlagRegister,
    }

    constructor() {
        this.registers = {
            A: new Register(8),
            X: new Register(8),
            Y: new Register(8),
            S: new Register(8),
            PC: new Register(16),
            FLAGS: new FlagRegister(8, [
                {
                    name: "C",
                    value: false,
                },
                {
                    name: "Z",
                    value: false,
                },
                {
                    name: "I",
                    value: false,
                },
                {
                    name: 'D',
                    value: false,
                },
                {
                    name: 'B',
                    value: false,
                },
                {
                    name: '-',
                    value: false,
                },
                {
                    name: 'V',
                    value: false,
                },
                {
                    name: 'N',
                    value: false,
                },
            ])
        }
    }
}