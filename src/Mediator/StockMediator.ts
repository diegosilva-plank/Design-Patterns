import { Colleague } from "./Colleague";
import { Mediator } from "./Mediator";
import { StockOffer } from "./StockOffer";

export class StockMediator implements Mediator {

    private colleagues: Colleague[] = []
    private stockBuyOffers: StockOffer[] = []
    private stockSellOffers: StockOffer[] = []

    private colleagueCodes: number = 0

    addColleague = (newColleague: Colleague) => {
        this.colleagues.push(newColleague)
        this.colleagueCodes++
        newColleague.setCollCode(this.colleagueCodes)
    }

    saleOffer = (stock: string, shares: number, collCode: number) => {
        let stockSold: boolean = false

        for (let offer of this.stockBuyOffers) {
            if (offer.getStockSymbol() === stock && offer.getStockShares() === shares) {
                console.log(`${shares} shares of ${stock} sold to colleague code ${offer.getCollCode()}`)
                this.stockBuyOffers.splice(this.stockBuyOffers.indexOf(offer), 1)
                stockSold = true
            }

            if (stockSold) {
                break
            }
        }

        if (!stockSold) {
            console.log(`${shares} shares of ${stock} added to inventory`)
            let newOffering: StockOffer = new StockOffer(shares, stock, collCode)
            this.stockSellOffers.push(newOffering)
        }
    }

    buyOffer = (stock: string, shares: number, collCode: number) => {
        let stockBought: boolean = false

        for (let offer of this.stockSellOffers) {
            if (offer.getStockSymbol() === stock && offer.getStockShares() === shares) {
                console.log(`${shares} shares of ${stock} bought by colleague code ${offer.getCollCode()}`)
                this.stockSellOffers.splice(this.stockSellOffers.indexOf(offer), 1)
                stockBought = true
            }

            if (stockBought) {
                break
            }
        }

        if (!stockBought) {
            console.log(`${shares} shares of ${stock} added to inventory`)
            let newOffering: StockOffer = new StockOffer(shares, stock, collCode)
            this.stockBuyOffers.push(newOffering)
        }
    }

    getStockOfferings = () => {
        console.log('\nStocks for Sale')

        for (let offer of this.stockSellOffers) {
            console.log(`${offer.getStockShares()} of ${offer.getStockSymbol()}`)
        }

        console.log('\nStock Buy Offers')

        for (let offer of this.stockBuyOffers) {
            console.log(`${offer.getStockShares()} of ${offer.getStockSymbol()}`)
        }
    }
}