import { MyRect } from "./MyRect"
import { Rect } from "./Rect"

export class Flyweight {

    public static main () {
        
        const flyweight = new Flyweight()
        flyweight.startDrawingTradicional()
        flyweight.startDrawingFlyweight()
    }

    startDrawingTradicional = () => {
        const start = Date.now()
        for (let i = 0; i < 10000000; i++) {
            const rect = new Rect(
                this.getRandX(), 
                this.getRandY(),
                this.getRandX(),
                this.getRandY(),
                this.getRandomColor(),
            )
            rect.draw()
        }
        const end = Date.now()
        console.log(`Drawing 10000000 rectangles took ${end - start}ms creating many Rectangles`)
    }

    startDrawingFlyweight = () => {
        const start = Date.now()
        for (let i = 0; i < 10000000; i++) {
            const rect = new MyRect(this.getRandomColor())
            rect.draw(
                this.getRandX(), 
                this.getRandY(),
                this.getRandX(),
                this.getRandY(),
            )
        }
        const end = Date.now()
        console.log(`Drawing 10000000 rectangles took ${end - start}ms using Flyweight`)
    }

    shapeColor = ['Red', 'Green', 'Blue', 'White', 'Black']

    getRandX = () => Math.floor(Math.random() * 100)
    getRandY = () => Math.floor(Math.random() * 100)
    getRandomColor = () => this.shapeColor[Math.floor(Math.random() * this.shapeColor.length)]
}