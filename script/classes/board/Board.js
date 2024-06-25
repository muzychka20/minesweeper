import * as random from '../../modules/getRandom.js'
import * as neighbourhood from '../../modules/neighbourhood.js'
import { Cell } from '../cell/Cell.js'

export class Board {
    #firstClick
    #width
    #height
    #minesQuantity
    #size
    #board

    constructor(_width, _height, _mines) {
        this.#width = _width
        this.#height = _height
        this.#minesQuantity = _mines
        this.#size = _width * _height
        this.#board = []
        this.#firstClick = true
    }

    getBoard() {
        return this.#board
    }

    isFirstClick() {
        return this.#firstClick
    }

    makeFirstClick() {
        this.#firstClick = false
    }

    createBoard() {
        for (let i = 0; i < this.#height; i++) {
            let row = []
            for (let j = 0; j < this.#width; j++) {
                row.push(new Cell())
            }
            this.#board.push(row)            
        }        
    }

    getHeight() {
        return this.#height
    }

    getWidth() {
        return this.#width
    }

    getQuantity(i, j) {
        return this.#board[i][j].quantityNearbyMines
    }

    isOpen(i, j) {
        return this.#board[i][j].open
    }

    isFlagged(i, j) {
        return this.#board[i][j].flagged
    }

    isMine(i, j) {
        return this.#board[i][j].mine
    }

    deleteFlag(i, j) {
        this.#board[i][j].flagged = false
    }

    setFlag(i, j) {
        this.#board[i][j].flagged = true
    }

    setMines(i, j) {
        let placedMines = 0
        while (placedMines < this.#minesQuantity) {
            let position = random.getRandomIntInclusive(0, this.#size - 1)
            let row = Math.floor(position / this.#width)
            let col = position % this.#width
            if (!this.#board[row][col].mine && row != i && col != j) {
                this.#board[row][col].mine = true
                placedMines++
            }
        }
    }  

    setDigits() {
        for (let i = 0; i < this.#height; i++) {
            for (let j = 0; j < this.#width; j++) {
                let minesAmount = 0
                if (this.#board[i][j].mine) {
                    this.#board.quantityNearbyMines = minesAmount
                    continue
                }
                for (let k = 0; k < neighbourhood.neighboursPairs.length; k++) {
                    let row = i + neighbourhood.neighboursPairs[k].first
                    let col = j + neighbourhood.neighboursPairs[k].second
                    if (this.isValidCordinates(row, col) && this.#board[row][col].mine) {
                        minesAmount++
                    }
                }
                this.#board[i][j].quantityNearbyMines = minesAmount
            }
        }
    }

    isValidCordinates(row, col) {
        return (row < this.#height && row >= 0 && col >= 0 && col < this.#width)
    }

    openCell(i, j) {
        if (!this.isValidCordinates(i, j) || this.#board[i][j].open || this.#board[i][j].flagged) {
            return
        }
        this.#board[i][j].open = true
        if (!this.#board[i][j].quantityNearbyMines) {
            for (let k = 0; k < neighbourhood.neighboursPairs.length; k++) {
                let row = i + neighbourhood.neighboursPairs[k].first
                let col = j + neighbourhood.neighboursPairs[k].second
                this.openCell(row, col)
            }
        }
    }

    checkVictory() {
        let count = 0
        for (let i = 0; i < this.#height; i++) {
            for (let j = 0; j < this.#width; j++) {
                if (this.#board[i][j].open) {
                    count++
                }
            }
        }
        return count === (this.#size-this.#minesQuantity)
    }    
}