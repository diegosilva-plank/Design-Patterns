import { AnimalFactory } from "./AnimalFactory"

export class Factory {

    public static main = () => {
        
        const animalFactory = new AnimalFactory()

        const dog = animalFactory.makeAnimal('dog')
        dog.talk()

        const cat = animalFactory.makeAnimal('cat')
        cat.talk()

        const chick = animalFactory.makeAnimal('chick')
        chick.talk()
    }
}