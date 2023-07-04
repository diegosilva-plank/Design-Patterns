export abstract class JoyStickMapping {

    constructor(private game: string) {}

    public abstract A: () => void
    public abstract B: () => void
    public abstract X: () => void
    public abstract Y: () => void
}