import { ISandwich } from "./ISandwich";
import { ToppingDecorator } from "./ToppingDecorator";

export class Onion extends ToppingDecorator {

    constructor(sandwich: ISandwich) {
        super(sandwich)
    }

    getDescription = () => `${this.sandwich.getDescription()}, onion`;
    getCost = () => this.sandwich.getCost() + 0.1;
}