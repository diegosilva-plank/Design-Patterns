import { ATMMachine } from "./ATMMachine";
import { ATMState } from "./ATMState";

export class NoCard implements ATMState {
        
        atmMachine: ATMMachine
    
        constructor(atmMachine: ATMMachine) {
            this.atmMachine = atmMachine
        }
    
        insertCard = () => {
            console.log("Please enter your pin")
            this.atmMachine.setATMState(this.atmMachine.getHasCardState())
        }
    
        ejectCard = () => {
            console.log("You didn't enter a card")
        }
    
        insertPin = (pinEntered: number) => {
            console.log("You have not entered your card")
        }
    
        requestCash = (cashToWithdraw: number) => {
            console.log("You have not entered your card")
        }
}