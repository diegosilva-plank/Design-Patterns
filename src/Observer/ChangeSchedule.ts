import { IObserver } from "./IObserver";
import { ISchedule } from "./ISchedule";
import { ISubject } from "./ISubject";

export class ChangeSchedule implements ISubject {
    
    private observers: IObserver[]
    private schedule: ISchedule

    constructor() {
        this.observers = []
    }

    register = (observer: IObserver) => {
        this.observers.push(observer)
    }

    unregister = (observer: IObserver) => {
        const observerIndex = this.observers.indexOf(observer)
        console.log(`Observer ${observerIndex + 1} deleted`)
        this.observers.splice(observerIndex, 1)
    }

    notifyObserver = () => {
        for (const observer of this.observers) {
            observer.update(this.schedule) 
        }
    }

    changeSchedule = (newSchedule: ISchedule) => {
        this.schedule = newSchedule
        this.notifyObserver()
    }
}