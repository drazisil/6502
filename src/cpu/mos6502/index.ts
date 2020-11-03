import { Register} from '../../memory/register'

export class MOS6502 {
    private registers: {
        A: Register,
        X: Register,
        Y: Register,
        S: Register,
        PC: Register,
    }

    constructor() {
        this.registers = {
            A: new Register(8),
            X: new Register(8),
            Y: new Register(8),
            S: new Register(8),
            PC: new Register(16)
        }
    }
}