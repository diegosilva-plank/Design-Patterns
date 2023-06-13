import { List } from "./List";

export interface IPrint<T> {
    
    print: (list: List<T>) => void
}

export class SingleLinePrint<T> implements IPrint<T> {
    
    print = (list: List<T>) => {
        for (const item of list.list) {
            process.stdout.write(`${item}, `)
        }
        console.log()
    }
}

export class MultipleLinePrint<T> implements IPrint<T> {

    print = (list: List<T>) => {
        for (const item of list.list) {
            console.log(item)
        }
    }
}