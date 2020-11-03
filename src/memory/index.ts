/**
 * 
 */
export class Memory {
    private buffer: DataView
    
    constructor(amountOfMemory: number) {
        if ((amountOfMemory % 8) !== 0) {
            throw new RangeError('Amount of memory not divisable by 8')
        }
        const ab = new ArrayBuffer(amountOfMemory)
        this.buffer = new DataView(ab)
        return this
    }

    set(idx: number, value: number) {
        if (idx > this.buffer.byteLength || idx < 0) {
            throw new RangeError('Index outside of memory area')
        }
        this.buffer.setUint8(idx, value)
    }

    get(idx: number) {
        return this.buffer.getUint8(idx)
    }
}

module.exports = {
    Memory,
}