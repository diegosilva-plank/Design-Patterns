import { CoffeeMachine } from "./CoffeeMachine"
import { MakeCoffee } from "./MakeCoffee"
import { SmartBulb } from "./SmartBulb"
import { TurnDeviceOff } from "./TurnDeviceOff"
import { TurnLightOn } from "./TurnLightOn"

export class Command {

    public static main = () => {
        
        const mySmartHome = {
            
            bulbKitchen: new SmartBulb(),
            bulbLivingRoom: new SmartBulb(),
            coffeMachine: new CoffeeMachine(),
            turnOnBulbKitchenRed: () => new TurnLightOn(mySmartHome.bulbKitchen, 'RED'),
            makeCapuccino: () => new MakeCoffee(mySmartHome.coffeMachine, 'CAPUCCINO'),
            turnOffBulbKitchen: () => new TurnDeviceOff(mySmartHome.bulbKitchen),
            turnOnBulbLivingRoom: () => new TurnLightOn(mySmartHome.bulbLivingRoom),
            turnOffBulbLivingRoom: () => new TurnDeviceOff(mySmartHome.bulbLivingRoom),
            turnCoffeMachineOff: () => new TurnDeviceOff(mySmartHome.coffeMachine),
            breakfast: () => {
                mySmartHome.turnOnBulbKitchenRed().execute()
                mySmartHome.makeCapuccino().execute()
            },
            afternoon: () => {
                mySmartHome.turnOnBulbLivingRoom().execute()
            },
            sleep: () => {
                mySmartHome.turnOffBulbKitchen().execute()
                mySmartHome.turnOffBulbLivingRoom().execute()
                mySmartHome.turnCoffeMachineOff().execute()
            }
        }

        mySmartHome.breakfast()
        mySmartHome.afternoon()
        mySmartHome.sleep()
    }
}