import { Burger } from "./Burger"
import { Cheese } from "./Cheese"
import { Hamburger } from "./Hamburger"
import { ISandwich } from "./ISandwich"
import { Lettice } from "./Lettice"
import { Onion } from "./Onion"
import { Picle } from "./Picle"
import { Sauce } from "./Sauce"

export class Decorator {

    public static main = () => {
        
        const burger = new Burger()
        const cheeseburger : ISandwich = new Cheese(new Burger())
        const big_mac : ISandwich = new Picle(new Onion(new Sauce(new Cheese(new Lettice(new Hamburger(new Burger()))))))

        console.log(`burger = { description: "${burger.getDescription()}", price: ${burger.getCost()} }`)
        console.log(`cheeseburger = { description: "${cheeseburger.getDescription()}", price: ${cheeseburger.getCost()} }`)
        console.log(`big_mac = { description: "${big_mac.getDescription()}", price: ${big_mac.getCost()} }`)
    }
}