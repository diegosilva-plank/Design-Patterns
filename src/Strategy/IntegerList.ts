import { List } from "./List";
import { SingleLinePrint } from "./Print";

export class IntegerList extends List<number> {

    constructor(list: number[]) {
        super(list)
        this.printType = new SingleLinePrint<number>()
    }
}