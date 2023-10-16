import { ATMState } from "./ATMState";
import { HasCard } from "./HasCard";
import { HasPin } from "./HasPin";
import { NoCard } from "./NoCard";
import { NoCash } from "./NoCash";

export class ATMMachine {

    hasCard: ATMState
    noCard: ATMState
    hasCorrectPin: ATMState
    atmOutOfMoney: ATMState

    atmState: ATMState

    cashInMachine: number = 2000
    correctPinEntered: boolean = false

    constructor() {
        this.hasCard = new HasCard(this)
        this.noCard = new NoCard(this)
        this.hasCorrectPin = new HasPin(this)
        this.atmOutOfMoney = new NoCash(this)

        this.atmState = this.noCard

        if(this.cashInMachine < 0) {
            this.atmState = this.atmOutOfMoney
        }
    }

    setATMState = (newATMState: ATMState) => {
        this.atmState = newATMState
    }

    setCashInMachine = (newCashInMachine: number) => {
        this.cashInMachine = newCashInMachine
    }

    insertCard = () => {
        this.atmState.insertCard()
    }

    ejectCard = () => {
        this.atmState.ejectCard()
    }

    requestCash = (cashToWithdraw: number) => {
        this.atmState.requestCash(cashToWithdraw)
    }

    insertPin = (pinEntered: number) => {
        this.atmState.insertPin(pinEntered)
    }

    getHasCardState = () => this.hasCard
    getNoCardState = () => this.noCard
    getHasPin = () => this.hasCorrectPin
    getNoCashState = () => this.atmOutOfMoney
}