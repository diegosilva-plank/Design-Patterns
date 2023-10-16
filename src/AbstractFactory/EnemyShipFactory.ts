import { ESEngine } from "./ESEngine";
import { ESWeapon } from "./ESWeapon";

export interface EnemyShipFactory {
    addESGun: () => ESWeapon
    addESEngine: () => ESEngine
}