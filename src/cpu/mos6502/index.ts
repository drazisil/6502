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
                    idx: 0,
                    name: "C",
                },
                {
                    idx: 1,
                    name: "Z",
                },
                {
                    idx: 2,
                    name: "I",
                },
                {
                    idx: 3,
                    name: 'D',
                },
                {
                    idx: 4,
                    name: 'B',
                },
                {
                    idx: 5,
                    name: '-',
                },
                {
                    idx: 6,
                    name: 'V',
                },
                {
                    idx: 7,
                    name: 'N'
                },
            ])
        }
    }
}