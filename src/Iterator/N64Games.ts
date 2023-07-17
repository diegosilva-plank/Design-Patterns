import { GameInfo } from "./GameInfo";
import { GameIterator } from "./GameIterator";

export class N64Games implements GameIterator {

    bestGames: GameInfo[]

    constructor() {
        this.bestGames = []

        this.addGame('Super Mario 64', 'Nintendo', 1990)
        this.addGame('Banjo Kazooie', 'Rareware', 1994)
    }

    forEach = (callbackfn: (value: GameInfo, index: number, array: GameInfo[]) => void, thisArg?: any) => this.bestGames.forEach(callbackfn)

    addGame = (gameName: string, publisherName: string, yearReleased: number) => {
        const test = this.bestGames.forEach
        const gameInfo = new GameInfo(gameName, publisherName, yearReleased)
    
        this.bestGames.push(gameInfo)
    }
}