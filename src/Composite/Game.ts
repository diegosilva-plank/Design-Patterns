import { GameComponent } from "./GameComponent";

export class Game extends GameComponent {

    constructor(public gameName: string, public publisherName: string, public releaseYear: number) { super() }

    getGameName = () => this.gameName
    getPublisherName = () => this.publisherName
    getReleaseYear = () => this.releaseYear

    displayGameInfo = (prefix: string = '') => console.log(`${prefix} ${this.gameName} was released by ${this.publisherName} in ${this.releaseYear}`)
}