export class StockOffer {

    private stockShares: number = 0
    private stockSymbol: string = ''
    private colleagueCode: number = 0

    constructor (newStockShares: number, newStockSymbol: string, newCollCode: number) {
        this.stockShares = newStockShares
        this.stockSymbol = newStockSymbol
        this.colleagueCode = newCollCode
    }

    getStockShares = () => this.stockShares
    getStockSymbol = () => this.stockSymbol
    getCollCode = () => this.colleagueCode
}