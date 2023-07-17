import { GameInfo } from "./GameInfo"
import { GameIterator } from "./GameIterator"

export class PS1Games implements GameIterator {

    bestGames: Set<GameInfo>

    constructor() {
        this.bestGames = new Set()

        this.addGame('Final Fantasy VII', 'Square Enix', 1990)
        this.addGame('GTA San Andreas', 'Rockstar', 1994)
    }

    forEach = (callbackfn: (value: GameInfo, index: number, array: GameInfo[]) => void, thisArg?: any) => Array.from(this.bestGames).forEach(callbackfn)

    addGame = (gameName: string, publisherName: string, yearReleased: number) => {
        
        const gameInfo = new GameInfo(gameName, publisherName, yearReleased)
    
        this.bestGames.add(gameInfo)
    }
}