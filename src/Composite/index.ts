import { Game } from "./Game"
import { GameGroup } from "./GameGroup"


export class Composite {

    public static main = () => {
        
        const multiplayer = new GameGroup('Multiplayer', 'Games that can be played simutaniously by more than one player')

        const platform = new GameGroup('Platform', 'One of the first game genders of all time')

        const racing = new GameGroup('Racing', 'Very competitive')

        const rpg = new GameGroup('RPG', 'Lots of dialoges and complex histories')

        const allMyGames = new GameGroup('My games', 'Every game I have here')

        allMyGames.add(multiplayer)
        allMyGames.add(rpg)

        multiplayer.add(platform)
        multiplayer.add(racing)

        platform.add(new Game('Super Mario 3D World', 'Nintendo', 2012))
        platform.add(new Game('Super Mario Odyssey', 'Nintendo', 2015))

        racing.add(new Game('Forza Motorsports', 'Microsoft', 2004))
        racing.add(new Game('Mario Kart', 'Nintendo', 1980))

        rpg.add(new Game('Final Fantasy VII', 'Square Enix', 2000))
        rpg.add(new Game('The Legend of Zelda', 'Nintendo', 1980))

        allMyGames.displayGameInfo()
    }
}