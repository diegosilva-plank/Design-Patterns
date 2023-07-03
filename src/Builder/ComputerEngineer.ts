import { IComputerBuilder } from "./IComputerBuilder";

export class ComputerEngineer {

    constructor(private computerBuilder: IComputerBuilder) {}

    getComputer = () => this.computerBuilder.getComputer()
    
    makeComputer = () => {
        this.computerBuilder.buildCPU()
        this.computerBuilder.buildGPU()
        this.computerBuilder.buildRAM()
        this.computerBuilder.buildSSD()
    }
}