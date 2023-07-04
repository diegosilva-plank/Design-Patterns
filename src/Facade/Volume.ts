export class Volume {

    private volume: number = 50

    up = (amount: number = 1) => { this.volume = Math.min(this.volume + amount, 100) }
    down = (amount: number = 1) => { this.volume = Math.max(this.volume - amount, 0) }
    check = () => this.volume
}