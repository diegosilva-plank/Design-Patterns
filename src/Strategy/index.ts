import { IntegerList } from "./IntegerList"
import { SingleLinePrint } from "./Print"
import { StringList } from "./StringList"

export class Strategy {

    public static main = () => {
        const numbers = new IntegerList([2, 4, 6, 8])
        numbers.print()
        const words = new StringList(['Hello', 'World', 'This', 'is', 'Strategy'])
        words.print()
        words.setPrint(new SingleLinePrint<string>())
        words.print()
    }
}