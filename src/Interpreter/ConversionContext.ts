import { Gallons } from "./Gallons"

/*
    This is not working becuase the video used frameworks from java that are not available in typescript
    If you want to use this method you must look for a way to implement it using typescript
*/

export class ConversionContext {

    private conversionResponse: string
    private fromConversion = ''
    private toConversion = ''
    private partsOfQues: string[]
    private quantity: number

    constructor(private conversionQues: string) {
        this.partsOfQues = this.getInput().split(' ')
        this.fromConversion = this.getCaptalized(this.partsOfQues[1])
        this.toConversion = this.getLowercase(this.partsOfQues[3])
        this.quantity = Number(this.partsOfQues[0])
        this.conversionResponse = this.partsOfQues[0] + ' ' +  this.partsOfQues[1] + ' equals ' + this.convert() + ' ' + this.getToConversion()
    }

    getInput = () => this.conversionQues

    getFromConversion = () => this.fromConversion
    getToConversion = () => this.toConversion
    getResponse = () => this.conversionResponse
    getQuantity = () => this.quantity

    getLowercase(wordToLowercase: string) {
        return wordToLowercase.toLowerCase()
    }

    getCaptalized(wordToCapitalize: string) {
        wordToCapitalize = wordToCapitalize.toLowerCase()
        wordToCapitalize = wordToCapitalize.charAt(0).toUpperCase() + wordToCapitalize.slice(1)

        const lengthOfWord = wordToCapitalize.length

        if(wordToCapitalize.charAt(lengthOfWord - 1) != 's') {
            wordToCapitalize += 's'
        }

        return wordToCapitalize
    }

    convert() {
        const gallons = new Gallons();
        if (this.toConversion == 'gallons') return gallons.gallons(this.quantity)
        else if (this.toConversion == 'quarts') return gallons.quarts(this.quantity)
        else if (this.toConversion == 'pints') return gallons.pints(this.quantity)
        else if (this.toConversion == 'cups') return gallons.cups(this.quantity)
        else if (this.toConversion == 'tablespoons') return gallons.tablespoons(this.quantity)
        else return 'nothing'
    }
}