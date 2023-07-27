import { ConversionContext } from "./ConversionContext";
import { Gallons } from "./Gallons";

export class Interpreter {

    public static main() {

        const question = new ConversionContext('256 tablespoons to gallons')

        const fromconversion = question.getFromConversion()
        console.log(fromconversion)
        const toConversion = question.getToConversion()
        console.log(toConversion)
        console.log(question.getResponse())

        const quantity = question.getQuantity()
    }
}