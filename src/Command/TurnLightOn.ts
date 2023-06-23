import { ICommand } from "./ICommand";
import { Color, SmartBulb } from "./SmartBulb";

export class TurnLightOn implements ICommand {
    
    constructor(public bulb: SmartBulb, color?: Color) {
        color && this.bulb.changeColor(color)
    }
    
    execute = () => this.bulb.on()

}