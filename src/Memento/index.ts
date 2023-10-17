import { Caretaker } from "./Caretaker"
import { Originator } from "./Originator"

export class Memento {

    public static main() {

        const memento = new Memento()
        memento.type('I walked')
        memento.save()
        memento.type('I walked down the street')
        memento.save()
        memento.type('I walked down the street and I saw something scary')
        memento.save()
        memento.undo()
        memento.undo()
        memento.undo()
        memento.redo()
        memento.redo()
    }

    save = () => {
        
        this.originator.set(this.theArticle)
        
        this.caretaker.addMemento(this.originator.storeInMemento())
        
        this.saveFiles++
        this.currentArticle++

        console.log('Save Files ' + this.saveFiles)
    }

    undo = () => {

        if (this.currentArticle >= 1) {
            this.currentArticle--
            this.theArticle = this.originator.restoreFromMemento(this.caretaker.getMemento(this.currentArticle))
        }
    }

    redo = () => {

        if (this.saveFiles > this.currentArticle + 1) {
            this.currentArticle++
            this.theArticle = this.originator.restoreFromMemento(this.caretaker.getMemento(this.currentArticle))
        }
    }

    type = (article: string) => this.theArticle = article

    private theArticle: string = ''
    
    caretaker = new Caretaker()
    
    originator = new Originator()

    saveFiles: number = 0
    currentArticle: number = 0
}