import { MyRect } from "./MyRect";

export class RectFacotory {

    private static reacts: { [key: string]: MyRect } = {}

    public static getRect = (color: string): MyRect => {
        let rect = RectFacotory.reacts[color]
        if (rect) {
            return rect
        } else {
            rect = new MyRect(color)
            RectFacotory.reacts[color] = rect
            return rect
        }
    }
}