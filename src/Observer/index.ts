import { ChangeSchedule } from "./ChangeSchedule"
import { ScheduleObserver } from "./ScheduleObserver"

export class Observer {

    public static main = () => {
        const changeSchedule = new ChangeSchedule()
        const observer1 = new ScheduleObserver(changeSchedule)

        changeSchedule.changeSchedule({
            mon: true,
            tue: false,
            wed: true,
            thu: false,
            fri: true
        })

        const observer2 = new ScheduleObserver(changeSchedule)

        changeSchedule.changeSchedule({
            mon: false,
            tue: true,
            wed: true,
            thu: true,
            fri: false
        })
    }
}