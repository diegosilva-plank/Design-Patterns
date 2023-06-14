import { ISandwich } from "./ISandwich";
import { ToppingDecorator } from "./ToppingDecorator";

export class Picle extends ToppingDecorator {

    constructor(sandwich: ISandwich) {
        super(sandwich)
    }

    getDescription = () => `${this.sandwich.getDescription()}, picle`;
    getCost = () => this.sandwich.getCost() + 0.1;
}