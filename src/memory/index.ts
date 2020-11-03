/**
 * 
 */
export class Memory {
    private buffer: DataView
    
    constructor(amountOfMemory: number) {
        if ((amountOfMemory % 1000) !== 0) {
            throw new Error('Amount of memory not divisable by 1k')
        }
        const ab = new ArrayBuffer(amountOfMemory)
        this.buffer = new DataView(ab)
        return this
    }

    set(idx: number, value: number) {
        this.buffer.setUint8(idx, value)
    }

    get(idx: number) {
        return this.buffer.getUint8(idx)
    }
}

module.exports = {
    Memory,
}