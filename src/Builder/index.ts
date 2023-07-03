import { ComputerEngineer } from "./ComputerEngineer"
import { MacBookAirBuilder } from "./MacBookAirBuilder"
import { MyPCBuilder } from "./MyPCBuilder"

export class Builder {

    public static main = () => {
        
        const macBookBuilder = new MacBookAirBuilder()
        const macBookEngineer = new ComputerEngineer(macBookBuilder)
        macBookEngineer.makeComputer()
        const macBook = macBookEngineer.getComputer()
        console.log(macBook.getSpecs())

        const myPCBuilder = new MyPCBuilder()
        const myPCEngineer = new ComputerEngineer(myPCBuilder)
        myPCEngineer.makeComputer()
        const myPC = myPCEngineer.getComputer()
        console.log(myPC.getSpecs())
    }
}