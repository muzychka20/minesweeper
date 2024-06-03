import * as random from '../modules/getRandom.js'
import * as neighbourhood from '../modules/neighbourhood.js'
import { Cell } from '../classes/Cell.js'

export class Board {    
    width
    height
    minesQuantity    
    size
    board
    
    constructor(_width, _height, _mines) {
        this.width = _width
        this.height = _height
        this.minesQuantity = _mines
        this.size = _width * _height
        this.board = []
    }

    createBoard() {
        for (let i = 0; i < this.height; i++) {
            let row = []
            for (let j = 0; j < this.width; j++) {
                row.push(new Cell())
            }
            this.board.push(row)
        }        
    }

    setMines() {
        let placedMines = 0        
        while (placedMines < this.minesQuantity) {
            let position = random.getRandomIntInclusive(0, this.size - 1)
            let row = Math.floor(position / this.width)
            let col = position % this.width
            if (!this.board[row][col].mine) {
                this.board[row][col].mine = true    
                placedMines++
            }
        }
    }

    displayBoard() {            
        console.log(this.board)        
    }
}