class Memory {
    #buffer
    
    constructor(amountOfMemory) {
        if ((amountOfMemory % 1000) !== 0) {
            throw new Error('Amount of memory not divisable by 1k')
        }
        const ab = new ArrayBuffer(amountOfMemory)
        this.#buffer = new DataView(ab)
        return this
    }
}

module.exports = {
    Memory,
}