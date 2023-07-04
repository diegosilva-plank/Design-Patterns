export class GamesCheck {

    private games: string[] = []

    addGames = (...games: string[]) => {
        games.forEach(game => {
            if (!this.games.includes(game)) this.games.push(game)
        })
    }

    removeGames = (...games: string[]) => {
        games.forEach(game => {
            const idx = this.games.indexOf(game)
            if (idx != -1) delete this.games[idx]
        })
    }

    checkGame = (game: string) => this.games.includes(game)
}