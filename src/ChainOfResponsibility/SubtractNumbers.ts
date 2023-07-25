import { Chain } from "./Chain";
import { Numbers } from "./Numbers";

export class SubtractNumbers implements Chain {
    
    private nextInChain!: Chain
    
    setNextChain = (nextChain: Chain) => this.nextInChain = nextChain
    calculate = (request: Numbers) => {
        if (request.getCalcWanted() === 'sub') {
            console.log(request.getNumber1() + ' - ' + request.getNumber2() + ' = ' + (request.getNumber1() - request.getNumber2()))
        } else {
            this.nextInChain.calculate(request)
        }
    }

}