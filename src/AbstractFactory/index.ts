import { UFOEnemyShipBuilding } from "./UFOEnemyShipBuilding";


export class AbstractFactory { 

    public static main () {

        const MakeUFOs = new UFOEnemyShipBuilding()

        const theGrunt = MakeUFOs.orderTheShip('UFO')
        console.log(theGrunt.getName())

        const theBoss = MakeUFOs.orderTheShip('UFO BOSS')
        console.log(theBoss.getName())
    }
}