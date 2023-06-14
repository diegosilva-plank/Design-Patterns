import { ISandwich } from "./ISandwich";
import { ToppingDecorator } from "./ToppingDecorator";

export class Cheese extends ToppingDecorator {

    constructor(sandwich: ISandwich) {
        super(sandwich)
    }

    getDescription = () => `${this.sandwich.getDescription()}, cheese`;
    getCost = () => this.sandwich.getCost() + 0.2;
}