import { Memento } from "./Memento";

export class Caretaker {

    savedArticles: Memento[] = []

    addMemento = (memento: Memento) => this.savedArticles.push(memento)

    getMemento = (index: number) => this.savedArticles[index]
}