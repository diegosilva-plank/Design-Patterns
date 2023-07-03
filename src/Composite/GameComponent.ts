export abstract class GameComponent {

    add: (newGameComponent: GameComponent) => void
    remove: (newGameComponent: GameComponent) => void
    getComponent: (componentIndex: number) => GameComponent
    getGameName: () => string
    getPublisherName: () => string
    getReleaseYear: () => number
    displayGameInfo: (prefix: string) => void
}