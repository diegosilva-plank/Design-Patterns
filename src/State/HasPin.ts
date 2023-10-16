import { ATMMachine } from "./ATMMachine";
import { ATMState } from "./ATMState";

export class HasPin implements ATMState {

    atmMachine: ATMMachine
    
    constructor(atmMachine: ATMMachine) {
        this.atmMachine = atmMachine
    }

    insertCard = () => {
        console.log("You already entered a card")
    }

    ejectCard = () => {
        console.log("Your card is ejected")
        this.atmMachine.setATMState(this.atmMachine.getNoCardState())
    }

    insertPin = (pinEntered: number) => {
        console.log("You already entered a PIN")
    }

    requestCash = (cashToWithdraw: number) => {
        if(cashToWithdraw > this.atmMachine.cashInMachine) {
            console.log("You don't have that much cash available")
            console.log("Your card is ejected")
            this.atmMachine.setATMState(this.atmMachine.getNoCardState())
        } else {
            console.log(cashToWithdraw + " is provided by the machine")
            this.atmMachine.setCashInMachine(this.atmMachine.cashInMachine - cashToWithdraw)

            console.log("Your card is ejected")
            this.atmMachine.setATMState(this.atmMachine.getNoCardState())

            if(this.atmMachine.cashInMachine <= 0) {
                this.atmMachine.setATMState(this.atmMachine.getNoCashState())
            }
        }
    }
}