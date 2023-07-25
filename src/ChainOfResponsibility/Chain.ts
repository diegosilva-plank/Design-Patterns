import { Numbers } from "./Numbers"

export interface Chain {

    setNextChain: (nextChain: Chain) => void
    calculate: (request: Numbers) => void
}