import { EnemyShip } from "./EnemyShip";
import { EnemyShipFactory } from "./EnemyShipFactory";

export class UFOEnemyShip extends EnemyShip {

    shipFactory: EnemyShipFactory

    constructor(shipFactory: EnemyShipFactory) {
        super();
        this.shipFactory = shipFactory;
    }

    makeShip = () => {
        console.log(`Making enemy ship ${this.getName()}`);
        this.weapon = this.shipFactory.addESGun();
        this.engine = this.shipFactory.addESEngine();
    }
}