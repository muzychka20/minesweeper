export class Cell {
    mine // true/false
    open // true/false
    flagged // true/false
    quantityNearbyMines

    constructor(_mine = false, _flagged = false, _open = false, _quantityNearbyMines = 0) {
        this.mine = _mine
        this.flagged = _flagged
        this.open = _open
        this.quantityNearbyMines = _quantityNearbyMines
    }
}