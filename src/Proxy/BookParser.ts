import { IBookParser } from "./IBookParser";

export class BookParser implements IBookParser {
    
    private pages: string[] = []
    private numPages: number = 0

    constructor(public book: string) {
        this.parseBook()
    }

    getPages = () => this.pages
    getNumPages = () => this.numPages

    private parseBook = () => {
        this.pages = this.book.split('ˆ&ˆ')
        this.numPages = this.pages.length
    }
}