import { GormanSlacks } from "./GormanSlacks";
import { JTPoorman } from "./JTPoorman";
import { StockMediator } from "./StockMediator";

export class Mediator {

    public static main() {

        const nyse = new StockMediator()
        const broker = new GormanSlacks(nyse)
        const broker2 = new JTPoorman(nyse)

        broker.saleOffer('MSFT', 100)
        broker.saleOffer('GOOG', 50)

        broker2.buyOffer('MSFT', 100)
        broker2.saleOffer('NRG', 10)

        broker.buyOffer('NRG', 10)

        nyse.getStockOfferings()
    }
}