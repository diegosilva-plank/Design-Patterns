import { EnemyShipBuilding } from "./EnemyShipBuilding";
import { UFOBossEnemyShip } from "./UFOBossEnemyShip";
import { UFOBossEnemyShipFactory } from "./UFOBossEnemyShipFactory";
import { UFOEnemyShip } from "./UFOEnemyShip";
import { UFOEnemyShipFactory } from "./UFOEnemyShipFactory";

export class UFOEnemyShipBuilding extends EnemyShipBuilding {

    protected makeEnemyShip = (typeOfShip: string) => {
        let theEnemyShip: UFOEnemyShip | undefined = undefined

        if (typeOfShip == 'UFO') {
            const shipPartsFactory = new UFOEnemyShipFactory()
            theEnemyShip = new UFOEnemyShip(shipPartsFactory)
            theEnemyShip.setName('UFO Grunt Ship')
        } else if (typeOfShip == 'UFO BOSS') {
            const shipPartsFactory = new UFOBossEnemyShipFactory()
            theEnemyShip = new UFOBossEnemyShip(shipPartsFactory)
            theEnemyShip.setName('UFO Boss Ship')
        }
        
        return theEnemyShip as unknown as UFOEnemyShip
    }
}