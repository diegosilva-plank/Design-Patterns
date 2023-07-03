import { Animal } from "./Animal"
import { AnimalAdapter } from "./AnimalAdapter"
import { Pikachu } from "./Pikachu"

export class Adapter {

    public static main = () => {
        
        const pikachu = new Pikachu(100)

        const arara = new Animal('Arara')
        const araramon = new AnimalAdapter(arara, 50)

        console.log(`Pikachu's HP: ${pikachu.life}`)
        araramon.attack(pikachu, 25)
        console.log(`Pikachu's HP: ${pikachu.life}`)

        pikachu.attack(araramon, 20)
        console.log(`Araramon's HP: ${araramon.life}`)
    }
}