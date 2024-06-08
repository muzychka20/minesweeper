export class Cell {
    mine // true/false
    open // true/false
    quantityNearbyMines

    constructor(_mine = false, _open = false, _quantityNearbyMines = 0) {
        this.mine = _mine
        this.open = _open
        this.quantityNearbyMines = _quantityNearbyMines
    }
}