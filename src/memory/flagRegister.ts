import { Memory} from './index'

export interface RegisterMap {
    name: string,
    value: boolean,
}

export class FlagRegister {
    private flagMap: RegisterMap[]
    size: number
    

    constructor(size: number, map: RegisterMap[]) {
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
        return flags[0].value        
    }

    setFlag = (flagName: string, value: boolean) => {
        this.flagMap.forEach(f => {
            if (f.name === flagName) {
                f.value = value
            }
        })
    }


    _dump = () => {
        return this.flagMap
    }
}