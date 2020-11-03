import {Memory} from '../memory'

export class Register {
    private possible_sizes = [
        8,
        16,
        32,
        64,
    ]
    private buffer: Memory
    size: number

    constructor(size: number) {
        if (!this.possible_sizes.includes(size) ) {
            throw new RangeError('Register size must be one of [8, 16, 32, 64]')
        }
        this.buffer = new Memory(size)
        this.size = size
        return this
    }
}