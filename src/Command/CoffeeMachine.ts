import { ISmartDevice } from "./ISmartDevice";

export type Coffee = 'BLACK' | 'LATTE' | 'CAPUCCINO' | 'DECAF' | null

export class CoffeeMachine implements ISmartDevice {
    
    capsule: Coffee = null

    on = () => console.log('Coffee machine ON')
    off = () => console.log('Coffee machine OFF')
    insertCapsule = (coffee: Coffee) => {
        if (this.capsule) {
            console.log('There is a capsule already!')
        } else {
            this.capsule = coffee
            console.log(`${this.capsule} capsule inserted!`)
        }
    } 
    removeCapsule = () => {
        this.capsule = null
        console.log('Capsule removed')
    }
    makeCoffee = () => {
        console.log(`Making ${this.capsule}`)
        this.capsule = null
    }
}