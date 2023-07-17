import { N64Games } from "./N64Games";
import { PS1Games } from "./PS1Games";
import { WiiGames } from "./WiiGames";

export class RetroEmulator {

    constructor(public n64Games = new N64Games(), public ps1Games = new PS1Games(), public wiiGames = new WiiGames()) {}

    showTheGames = () => {

        console.log('N64 Games')
        this.n64Games.forEach(game => console.log(game))

        console.log('PS1 Games')
        this.ps1Games.forEach(game => console.log(game))

        console.log('Wii Games')
        this.wiiGames.forEach(game => console.log(game))
    }
}