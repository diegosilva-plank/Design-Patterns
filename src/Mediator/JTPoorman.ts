import { Colleague } from "./Colleague";
import { Mediator } from "./Mediator";

export class JTPoorman extends Colleague {

    constructor (newMediator: Mediator) {
        
        super(newMediator)
        console.log('JT Poorman signed up for the exchange\n')
    }
}