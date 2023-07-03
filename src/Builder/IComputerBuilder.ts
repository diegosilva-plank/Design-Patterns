import { Computer } from "./Computer"

export interface IComputerBuilder {

    buildCPU: () => void
    buildGPU: () => void
    buildRAM: () => void
    buildSSD: () => void
    getComputer: () => Computer
}