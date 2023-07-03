import { IPokemon } from "./IPokemon";

export class Pikachu implements IPokemon {
    
    name: 'Pikachu';
    constructor(public life: number) {}
    attack = (enemy: IPokemon, power: number) => {
        enemy.life -= power
    }
}