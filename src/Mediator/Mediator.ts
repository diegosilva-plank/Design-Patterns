import { Colleague } from "./Colleague"

export interface Mediator {

    saleOffer: (stock: string, shares: number, collCode: number) => void
    buyOffer: (stock: string, shares: number, collCode: number) => void
    addColleague: (newColleague: Colleague) => void
}