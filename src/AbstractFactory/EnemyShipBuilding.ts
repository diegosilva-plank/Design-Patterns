import { EnemyShip } from "./EnemyShip"

export abstract class EnemyShipBuilding {

    protected abstract makeEnemyShip(typeOfShip: string): EnemyShip;

    orderTheShip = (typeOfShip: string) => {
        const theEnemyShip = this.makeEnemyShip(typeOfShip)
        theEnemyShip.makeShip()
        theEnemyShip.displayEnemyShip()
        theEnemyShip.followHeroShip()
        theEnemyShip.enemyShipShoots()
        return theEnemyShip
    }
}