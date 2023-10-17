export class Memento {

    private article: string

    constructor (newArticle: string) {
        this.article = newArticle
    }

    getSavedArticle = () => this.article
}