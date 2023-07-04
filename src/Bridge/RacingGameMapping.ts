import { JoyStickMapping } from "./JoyStickMapping";

export class RacingGameMapping extends JoyStickMapping {
    
    constructor(game: string) { super(game) }

    public A = () => console.log('Brake')
    public B = () => console.log('Accelerate')
    public X = () => console.log('Drift')
    public Y = () => console.log('Turbo')
}