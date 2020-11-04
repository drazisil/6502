/**
 * 
 */
export class Memory {
    private buffer: Buffer
    
    constructor(amountOfMemory: number) {

        this.buffer = Buffer.alloc(amountOfMemory)
        return this
    }

    set8(idx: number, value: number) {
        if (idx > this.buffer.byteLength || idx < 0) {
            throw new RangeError('Index outside of memory area')
        }
        this.buffer.writeInt8(value, idx)
    }

    set16(idx: number, value: number) {
        if (idx > this.buffer.byteLength || idx < 0) {
            throw new RangeError('Index outside of memory area')
        }
        this.buffer.writeUInt16LE(value, idx)
    }


    get8(idx: number) {
        return this.buffer.readInt8(idx)
    }

    get16(idx: number) {
        return this.buffer.readInt8(idx)
    }

    asNumber() {
        return Number.parseInt(this.buffer.join(""))
    }

    asHex() {
        return this.buffer.toString('hex')
    }
}

module.exports = {
    Memory,
}