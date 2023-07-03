import { Animal } from "./Animal";
import { IPokemon } from "./IPokemon";

export class AnimalAdapter implements IPokemon {

    name: string;
    constructor(public animal: Animal, public life: number) {
        this.name = `${animal.name}mon`
    }
    attack = (enemy: IPokemon, power: number) => {
        enemy.life -= power
    }
}