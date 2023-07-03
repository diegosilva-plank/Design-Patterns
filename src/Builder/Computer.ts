import { IComputerPlan } from "./IComputerPlan";

export interface ISpecs {
    CPU: string
    GPU: string
    RAM: string
    SSD: string
}

export class Computer implements IComputerPlan {
    
    cpu: string
    gpu: string
    ram: string
    ssd: string

    setCPU = (cpu: string) => {
        this.cpu = cpu
    }
    getCPU = () => this.cpu

    setGPU = (gpu: string) => {
        this.gpu = gpu
    }
    getGPU = () => this.gpu

    setRAM = (ram: string) => {
        this.ram = ram
    }
    getRAM = () => this.ram

    setSSD = (ssd: string) => {
        this.ssd = ssd
    }
    getSSD = () => this.ssd

    getSpecs = () => ({
        CPU: this.cpu,
        GPU: this.gpu,
        RAM: this.ram,
        SSD: this.ssd
    }) as ISpecs
}