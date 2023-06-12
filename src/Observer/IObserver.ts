import { ISchedule } from "./ISchedule";

export interface IObserver {

    update: (schedule: ISchedule) => void
}