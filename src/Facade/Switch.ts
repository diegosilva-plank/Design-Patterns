import { GameSlot } from "./GameSlot";
import { GamesCheck } from "./GamesCheck";
import { Volume } from "./Volume";

export class Switch {

    private gamesCheck = new GamesCheck()
    private gameSlot = new GameSlot(this.gamesCheck)
    private volume = new Volume()

    openGame = (game: string) => {
        if (this.gamesCheck.checkGame(game)) {
            console.log(`Opened ${game}`)
        } else {
            console.log(`Could't open ${game}`)
        }
    }

    insertGame = (game: string) => this.gameSlot.insertGame(game)
    ejectGame = () => this.gameSlot.ejectGame()
    addGames = (...games: string[]) => this.gamesCheck.addGames(...games)
    removeGames = (...games: string[]) => this.gamesCheck.removeGames(...games)
    volumeUp = (amount: number = 1) => this.volume.up(amount)
    volumeDown = (amount: number = 1) => this.volume.down(amount)
    checkVolume = () => this.volume.check()
}