export class GameInfo {

    constructor(public gameName: string, public publisherName: string, public yearReleased: number) {}

    getGameName = () => this.gameName
    getPublisherName = () => this.publisherName
    getYearReleased = () => this.yearReleased
}