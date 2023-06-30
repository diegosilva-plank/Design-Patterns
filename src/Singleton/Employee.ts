import { Schedule } from "./Schedule"

export class Employee {

    private static id_count = 0
    private id : number

    constructor() {
        this.id = ++Employee.id_count
        Schedule.getInstance().schedule[this.id] = { mon: true, tue: true, wed: true, thu: true, fri: true }
    }

    changeSchedule = (schedule: { mon: boolean, tue: boolean, wed: boolean, thu: boolean, fri: boolean }) => {
        Schedule.getInstance().schedule[this.id] = schedule
    }
}