import { Chain } from "./Chain";
import { Numbers } from "./Numbers";

export class DivideNumbers implements Chain {
    
    private nextInChain!: Chain
    
    setNextChain = (nextChain: Chain) => this.nextInChain = nextChain
    calculate = (request: Numbers) => {
        if (request.getCalcWanted() === 'div') {
            console.log(request.getNumber1() + ' / ' + request.getNumber2() + ' = ' + (request.getNumber1() / request.getNumber2()))
        } else {
            console.log("Only works for add, sub, mult and div")
        }
    }

}