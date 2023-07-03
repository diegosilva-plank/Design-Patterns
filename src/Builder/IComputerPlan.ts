export interface IComputerPlan {

    setCPU: (cpu: string) => void
    setGPU: (gpu: string) => void
    setRAM: (ram: string) => void
    setSSD: (ssd: string) => void
}