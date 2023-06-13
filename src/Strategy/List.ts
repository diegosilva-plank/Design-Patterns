import { IPrint } from "./Print";

export class List<T> {

    constructor(public list: T[]) {}

    printType: IPrint<T>

    print = () => this.printType.print(this)

    setPrint = (newPrint: IPrint<T>) => this.printType = newPrint
}