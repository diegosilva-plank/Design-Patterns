import { ESUFOBossEngine } from "./ESUFOBossEngine";
import { ESUFOBossGun } from "./ESUFOBossGun";
import { EnemyShipFactory } from "./EnemyShipFactory";

export class UFOBossEnemyShipFactory implements EnemyShipFactory {

    addESGun = () => new ESUFOBossGun()
    addESEngine = () => new ESUFOBossEngine();
}