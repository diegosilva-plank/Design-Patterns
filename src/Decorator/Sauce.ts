import { ISandwich } from "./ISandwich";
import { ToppingDecorator } from "./ToppingDecorator";

export class Sauce extends ToppingDecorator {

    constructor(sandwich: ISandwich) {
        super(sandwich)
    }

    getDescription = () => `${this.sandwich.getDescription()}, sauce`;
    getCost = () => this.sandwich.getCost() + 0.2;
}