import { Animal } from "./Animal"
import { Cat } from "./Cat"
import { Chick } from "./Chick"
import { Dog } from "./Dog"

export class AnimalFactory {

    makeAnimal = (newAnimalType: string) => {
        let animal = new Animal()

        if (newAnimalType === 'dog') {
            animal = new Dog()
        } 
        
        if (newAnimalType === 'cat') {
            animal = new Cat()
        }
        
        if (newAnimalType === 'chick') {
            animal = new Chick()
        }

        return animal
    }
}