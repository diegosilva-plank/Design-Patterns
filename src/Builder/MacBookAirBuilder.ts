import { Computer } from "./Computer";
import { IComputerBuilder } from "./IComputerBuilder";

export class MacBookAirBuilder implements IComputerBuilder {
    
    computer: Computer

    constructor() { this.computer = new Computer() }
    
    buildCPU = () => this.computer.setCPU('M1')
    buildGPU = () => this.computer.setGPU('Integrated GPU')
    buildRAM = () => this.computer.setRAM('8GB')
    buildSSD = () => this.computer.setSSD('256GB')
    getComputer = () => this.computer
}