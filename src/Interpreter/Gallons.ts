import { Expression } from "./Expression";

export class Gallons extends Expression {
    gallons = (quantity: number) => quantity.toString()
    quarts = (quantity: number) => (quantity * 4).toString()
    pints = (quantity: number) => (quantity * 8).toString()
    cups = (quantity: number) => (quantity * 16).toString()
    tablespoons = (quantity: number) => (quantity * 256).toString() 
}