import { ATMMachine } from "./ATMMachine";
import { ATMState } from "./ATMState";

export class NoCash implements ATMState {

    atmMachine: ATMMachine
    
    constructor(atmMachine: ATMMachine) {
        this.atmMachine = atmMachine
    }

    insertCard = () => {
        console.log("We don't have any money")
        console.log("Your card is ejected")
    }

    ejectCard = () => {
        console.log("We don't have any money")
        console.log("There is no card to eject")
    }

    insertPin = (pinEntered: number) => {
        console.log("We don't have any money")
    }

    requestCash = (cashToWithdraw: number) => {
        console.log("We don't have any money")
    }
}