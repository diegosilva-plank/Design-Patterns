export class Schedule {

    private static firstInstance: Schedule | null = null

    private constructor() {}

    public schedule = {} as { [id: number] : { mon: boolean, tue: boolean, wed: boolean, thu: boolean, fri : boolean} }

    public static getInstance = () : Schedule => {
        
        if (this.firstInstance == null) {
            this.firstInstance = new Schedule()
        }

        return this.firstInstance
    }

    public print = () => {
        console.log(this.schedule)
    }
}