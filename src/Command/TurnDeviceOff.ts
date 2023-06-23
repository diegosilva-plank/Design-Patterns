import { ICommand } from "./ICommand";
import { ISmartDevice } from "./ISmartDevice";

export class TurnDeviceOff implements ICommand {
    
    constructor(public device: ISmartDevice) {}
    
    execute = () => this.device.off()
}