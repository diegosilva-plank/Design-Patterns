import { ISmartDevice } from "./ISmartDevice";

export type Color = 'WHITE' | 'BLUE' | 'RED' | 'GREEN' | 'YELLOW'

export class SmartBulb implements ISmartDevice {
    
    color: Color = 'WHITE'

    on = () => console.log(`<<<${this.color}>>>`)
    off = () => console.log('>>>OFF<<<')
    changeColor = (color: Color) => this.color = color
}