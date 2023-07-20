import { LazyBookParserProxy } from "./LazyBookParserProxy"

export class Proxy {

    public static main = () => {
        
        const book = 'The Lord of the Ringsˆ&ˆThe Fellowship of the Ringˆ&ˆThe Two Towersˆ&ˆThe Return of the King'
        const bookParser = new LazyBookParserProxy(book)
        console.log(bookParser.getNumPages())
        console.log(bookParser.getPages())
    }
}