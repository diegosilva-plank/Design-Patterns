import { Coffee, CoffeeMachine } from "./CoffeeMachine";
import { ICommand } from "./ICommand";

export class MakeCoffee implements ICommand {
    
    constructor(public coffeeMachine: CoffeeMachine, capsule?: Coffee) {
        capsule && this.coffeeMachine.insertCapsule(capsule)
    }
    
    execute = () => this.coffeeMachine.makeCoffee()

}