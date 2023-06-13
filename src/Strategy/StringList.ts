import { List } from "./List";
import { MultipleLinePrint } from "./Print";

export class StringList extends List<string> {

    constructor(list: string[]) {
        super(list)
        this.printType = new MultipleLinePrint<string>()
    }
}