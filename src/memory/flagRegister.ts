import { Memory} from './index'

export interface RegisterMap {
    idx: number,
    name: string,
}

export class FlagRegister {
    private buffer: Memory
    private flagMap: RegisterMap[]
    size: number
    

    constructor(size: number, map: RegisterMap[]) {
        this.buffer = new Memory(size)
        this.size = size
        this.flagMap = map
        return this
    }


    getFlag = (flagName: string) => {
        let flags = this.flagMap.filter(f => {
            return f.name === flagName
        })

        if (flags.length === 0) {
            throw new Error(` Flag ${flagName} was not found`)
        }
        return this._isBitSet(this.buffer.asNumber(), flags[0].idx)
        

    }

    _dump = () => {
        return this.buffer
    }

    // Thanks to https://bits.stephan-brumme.com/basics.html
    _isBitSet(value: number, index: number) {
        value >>= index
        return (value & 1) != 0
    }

    _toggleBit(value: number, index: number) {
        const mask = 1 << index
        return value ^ mask
    }

    _setBit(value: number, index:number) {
        const mask = 1 << index
        return value & ~mask
    }

    _clearBit(value: number, index: number) {
        const mask = 1 >> index
        return value & ~mask
    }



}