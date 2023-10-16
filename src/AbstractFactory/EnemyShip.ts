import { ESEngine } from "./ESEngine";
import { ESWeapon } from "./ESWeapon";

export abstract class EnemyShip {

    private name: string;
    
    weapon: ESWeapon
    engine: ESEngine

    getName = () => this.name
    setName = (name: string) => this.name = name

    abstract makeShip: () => void

    followHeroShip = () => console.log(`${this.getName()} is following the hero`)
    displayEnemyShip = () => console.log(`${this.getName()} is on the screen`)
    enemyShipShoots = () => console.log(`${this.getName()} attacks and does ${this.weapon.toString()}`)

    toString = () => {
        let infoOnShip = `The ${this.getName()} has a top speed of ${this.engine.toString()} and an attack power of ${this.weapon.toString()}`
        return infoOnShip
    }
}