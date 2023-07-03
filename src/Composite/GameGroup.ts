import { GameComponent } from "./GameComponent"

export class GameGroup extends GameComponent {

    gameComponents = [] as GameComponent[]

    constructor(public groupName: string, public groupDescription: string) { super() }

    getGroupName = () => this.groupName
    getGroupDescription = () => this.groupDescription

    add = (newGameComponent: GameComponent) => this.gameComponents.push(newGameComponent)
    remove = (newGameComponent: GameComponent) => delete this.gameComponents[this.gameComponents.indexOf(newGameComponent)]
    getComponent = (componentIndex: number) => this.gameComponents[componentIndex]
    displayGameInfo = (prefix: string = '') => {
        console.log(`${prefix} Group: ${this.getGroupName()}, Description: ${this.getGroupDescription()}:`)
        this.gameComponents.forEach(gameComponent => { gameComponent.displayGameInfo(`${prefix} -->`) })
    }
}