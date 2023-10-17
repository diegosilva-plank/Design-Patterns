import { Memento } from "./Memento"

export class Originator {

    private article: string

    set = (newArticle: string) => {
        console.log('From Originator: Current Version of Article\n' + newArticle + '\n')
        this.article = newArticle
    }

    storeInMemento = () => {
        console.log('From Originator: Saving to Memento')
        return new Memento(this.article)
    }

    restoreFromMemento = (memento: Memento) => {
        this.article = memento.getSavedArticle()
        console.log('From Originator: Previous Article Saved in Memento\n' + this.article + '\n')
        return this.article
    }
}