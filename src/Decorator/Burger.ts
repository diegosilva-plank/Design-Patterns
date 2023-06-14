import { ISandwich } from "./ISandwich";

export class Burger implements ISandwich {
    
    getDescription = () => 'Bread, hamburger';
    getCost = () => .99;
}