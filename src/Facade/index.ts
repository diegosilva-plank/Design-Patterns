import { Switch } from "./Switch"

export class Facade {

    public static main = () => {

        const mySwitch = new Switch()
        
        mySwitch.openGame('Zelda BOTW')
        mySwitch.insertGame('Zelda BOTW')
        mySwitch.openGame('Zelda BOTW')
        mySwitch.addGames('Mario Odyssey', 'Mario Kart')
        mySwitch.openGame('Mario Odyssey')
        mySwitch.ejectGame()
        mySwitch.openGame('Zelda BOTW')
        mySwitch.volumeUp(5)
        mySwitch.volumeDown()
        console.log(mySwitch.checkVolume())
    }
}