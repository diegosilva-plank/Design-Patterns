import { Employee } from "./Employee"
import { Schedule } from "./Schedule"

export class Singleton {

    public static main = () => {
        const e1 = new Employee()
        const e2 = new Employee()
        e1.changeSchedule({ mon: true, tue: true, wed: false, thu: false, fri: true })
        Schedule.getInstance().print()

        const e3 = new Employee()
        e3.changeSchedule({ mon: false, tue: false, wed: false, thu: true, fri: true })
        Schedule.getInstance().print()
    }
}