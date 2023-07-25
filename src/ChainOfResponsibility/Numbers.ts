export class Numbers {

    constructor(private number1: number, private number2: number, private calculationWanted: string) {}

    getNumber1 = () => this.number1
    getNumber2 = () => this.number2
    getCalcWanted = () => this.calculationWanted
}