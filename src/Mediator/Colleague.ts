import { Mediator } from "./Mediator"

export abstract class Colleague {

    private mediator: Mediator
    private colleagueCode: number

    constructor (newMediator: Mediator) {
        this.mediator = newMediator
        this.mediator.addColleague(this)
    }

    saleOffer = (stock: string, shares: number) => {
        this.mediator.saleOffer(stock, shares, this.colleagueCode)
    }

    buyOffer = (stock: string, shares: number) => {
        this.mediator.buyOffer(stock, shares, this.colleagueCode)
    }

    setCollCode = (collCode: number) => {
        this.colleagueCode = collCode
    }
}