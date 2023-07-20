import { BookParser } from "./BookParser";
import { IBookParser } from "./IBookParser";

export class LazyBookParserProxy implements IBookParser {
        
        private bookParser: IBookParser | null = null

        constructor(public book: string) {}
    
        getPages = () => {
            if (!this.bookParser) {
                this.bookParser = new BookParser(this.book)
            }
            return this.bookParser.getPages()
        }
        getNumPages = () => {
            if (!this.bookParser) {
                this.bookParser = new BookParser(this.book)
            }
            return this.bookParser.getNumPages()
        }
}