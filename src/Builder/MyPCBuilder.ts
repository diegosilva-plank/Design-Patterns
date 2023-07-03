import { Computer } from "./Computer";
import { IComputerBuilder } from "./IComputerBuilder";

export class MyPCBuilder implements IComputerBuilder {
    
    computer: Computer

    constructor() { this.computer = new Computer() }
    
    buildCPU = () => this.computer.setCPU('Ryzen 5 5500')
    buildGPU = () => this.computer.setGPU('RTX 2060 6GB')
    buildRAM = () => this.computer.setRAM('16GB 3200MHz')
    buildSSD = () => this.computer.setSSD('1TB + 512GB')
    getComputer = () => this.computer
}