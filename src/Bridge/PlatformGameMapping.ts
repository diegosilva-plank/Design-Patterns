import { JoyStickMapping } from "./JoyStickMapping";

export class PlatformGameMapping extends JoyStickMapping {
    
    constructor(game: string) { super(game) }

    public A = () => console.log('Attack')
    public B = () => console.log('Jump')
    public X = () => console.log('Run')
    public Y = () => console.log('Roll')
}