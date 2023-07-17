import { Game } from "../Composite/Game"
import { GameInfo } from "./GameInfo"
import { GameIterator } from "./GameIterator"

export class WiiGames implements GameIterator {

    bestGames: Map<number, GameInfo>

    hashKey = 0

    constructor() {
        this.bestGames = new Map()

        this.addGame('Super Mario Galaxy', 'Nintendo', 2005)
        this.addGame('Zelda Skyward Sword', 'Nintendo', 2008)
    }

    forEach = (callbackfn: (value: GameInfo, index: number, array: GameInfo[]) => void, thisArg?: any) => {
        const array = [] as GameInfo[]
        this.bestGames.forEach(gameInfo => array.push(gameInfo))
        return array.forEach(callbackfn)
    }

    addGame = (gameName: string, publisherName: string, yearReleased: number) => {
        
        const gameInfo = new GameInfo(gameName, publisherName, yearReleased)
    
        this.bestGames.set(this.hashKey++, gameInfo)
    }
}