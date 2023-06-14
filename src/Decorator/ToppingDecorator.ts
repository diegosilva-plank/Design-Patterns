import { ISandwich } from "./ISandwich";

export class ToppingDecorator implements ISandwich {

    constructor(protected sandwich: ISandwich) {}
    
    getDescription = () => this.sandwich.getDescription();
    getCost = () => this.sandwich.getCost();
}