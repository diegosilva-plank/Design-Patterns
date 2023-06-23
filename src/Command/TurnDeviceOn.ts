import { ICommand } from "./ICommand";
import { ISmartDevice } from "./ISmartDevice";

export class TurnLightOn implements ICommand {
    
    constructor(public device: ISmartDevice) {}
    
    execute = () => this.device.on()
}