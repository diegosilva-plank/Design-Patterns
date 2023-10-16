
import { ESUFOEngine } from "./ESUFOEngine";
import { ESUFOGun } from "./ESUFOGun";
import { EnemyShipFactory } from "./EnemyShipFactory";

export class UFOEnemyShipFactory implements EnemyShipFactory {

    addESGun = () => new ESUFOGun()
    addESEngine = () => new ESUFOEngine();
}