import { IObserver } from "./IObserver";
import { ISchedule } from "./ISchedule";
import { ISubject } from "./ISubject";

export class ScheduleObserver implements IObserver {
    
    private schedule: ISchedule
    private static observerIDTracker = 0

    private observerID: number


    constructor(private changeSchedule: ISubject) {
        this.observerID = ++ScheduleObserver.observerIDTracker
        console.log(`New Observer ${this.observerID}`)
        this.changeSchedule.register(this)
    }

    update = (schedule: ISchedule) => {
        this.schedule = schedule
        this.printTheSchedule()
    }

    printTheSchedule() {
        console.log(`${this.observerID} ${JSON.stringify(this.schedule)}`)
    }
}