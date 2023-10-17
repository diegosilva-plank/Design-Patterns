import { Colleague } from "./Colleague";
import { Mediator } from "./Mediator";

export class GormanSlacks extends Colleague {

    constructor (newMediator: Mediator) {
        
        super(newMediator)
        console.log('Gorman Slacks signed up for the exchange\n')
    }
}