import { ISandwich } from "./ISandwich";
import { ToppingDecorator } from "./ToppingDecorator";

export class Hamburger extends ToppingDecorator {

    constructor(sandwich: ISandwich) {
        super(sandwich)
    }

    getDescription = () => `${this.sandwich.getDescription()}, hamburger`;
    getCost = () => this.sandwich.getCost() + 0.3;
}