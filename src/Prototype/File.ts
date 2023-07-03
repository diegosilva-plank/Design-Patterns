const line = '________________________________'

export interface IFile {
    name: string
    extension: string
    content: string
}

export class TxtFile {
    
    constructor(public file: IFile) {}

    setName = (newName: string) => this.file.name = newName
    setExtension = (newExtension: string) => this.file.extension = newExtension
    setContent = (newContent: string) => this.file.content = newContent

    print = () => console.log(`${line}\n${this.file.name}.${this.file.extension}:\n${line}\n${this.file.content}\n${line}`)

    makeCopy = () => new TxtFile({ ...this.file })
}