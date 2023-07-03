export interface IPokemon {

    name: string,
    life: number,
    attack: (enemy: IPokemon, power: number) => void,
}