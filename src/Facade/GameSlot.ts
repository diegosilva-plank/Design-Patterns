import { GamesCheck } from "./GamesCheck";

export class GameSlot {

    game: string | null = null

    constructor(private gamesCheck: GamesCheck) {}

    checkGame = () => this.game
    
    insertGame = (game: string) => {
        if (this.checkGame()) {
            console.log('There is already a game in the slot')
        } else {
            this.game = game
            this.gamesCheck.addGames(game)
            console.log(`${game} inserted in the slot`)
        }
    }

    ejectGame = () => {
        if (this.checkGame()) {
            this.gamesCheck.removeGames(this.game!)
            console.log(`${this.game} ejected`)
        } else {
            console.log('No game to be ejected')
        }
    }
}