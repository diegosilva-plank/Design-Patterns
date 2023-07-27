export abstract class Expression {

    abstract gallons: (quantity: number) => string
    abstract quarts: (quantity: number) => string
    abstract pints: (quantity: number) => string
    abstract cups: (quantity: number) => string
    abstract tablespoons: (quantity: number) => string
}