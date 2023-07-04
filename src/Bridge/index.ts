import { JoyStickMapping } from "./JoyStickMapping";
import { PlatformGameMapping } from "./PlatformGameMapping";
import { RacingGameMapping } from "./RacingGameMapping";

export class Bridge { 
// I think it is not actually the Bridge pattern, because we should have an object rather than a string

    public static main () {

        const mario : JoyStickMapping = new PlatformGameMapping('Mario')
        mario.A()
        mario.B()
        mario.X()
        mario.Y()
        
        const forza : JoyStickMapping = new RacingGameMapping('Forza')
        forza.A()
        forza.B()
        forza.X()
        forza.Y()
    }
}