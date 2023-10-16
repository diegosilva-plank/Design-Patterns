import { ATMMachine } from "./ATMMachine";
import { ATMState } from "./ATMState";

export class HasCard implements ATMState {
    
        atmMachine: ATMMachine
    
        constructor(atmMachine: ATMMachine) {
            this.atmMachine = atmMachine
        }
    
        insertCard = () => {
            console.log("You can only insert one card at a time")
        }
    
        ejectCard = () => {
            console.log("Your card is ejected")
            this.atmMachine.setATMState(this.atmMachine.getNoCardState())
        }
    
        insertPin = (pinEntered: number) => {
            if(pinEntered === 1234) {
                console.log("You entered the correct PIN")
                this.atmMachine.correctPinEntered = true
                this.atmMachine.setATMState(this.atmMachine.getHasPin())
            } else {
                console.log("You entered the wrong PIN")
                this.atmMachine.correctPinEntered = false
                console.log("Your card is ejected")
                this.atmMachine.setATMState(this.atmMachine.getNoCardState())
            }
        }
    
        requestCash = (cashToWithdraw: number) => {
            console.log("You have not entered your PIN")
        }
}