import { AddNumbers } from "./AddNumbers"
import { DivideNumbers } from "./DivideNumbers"
import { MultNumbers } from "./MultNumbers"
import { Numbers } from "./Numbers"
import { SubtractNumbers } from "./SubtractNumbers"


export class ChainOfResponsibility {

    public static main = () => {
        
        const chainCalc1 = new AddNumbers()
        const chainCalc2 = new SubtractNumbers()
        const chainCalc3 = new MultNumbers()
        const chainCalc4 = new DivideNumbers()

        chainCalc1.setNextChain(chainCalc2)
        chainCalc2.setNextChain(chainCalc3)
        chainCalc3.setNextChain(chainCalc4)

        chainCalc1.calculate(new Numbers(4, 2, 'add'))
        chainCalc1.calculate(new Numbers(4, 2, 'sub'))
        chainCalc1.calculate(new Numbers(4, 2, 'mult'))
        chainCalc1.calculate(new Numbers(4, 2, 'div'))
        chainCalc1.calculate(new Numbers(4, 2, 'pow'))
    }
}