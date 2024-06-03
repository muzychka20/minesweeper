import * as random from '../modules/getRandom.js'
import { Cell } from '../classes/Cell.js'

export class Board {    
    width
    height
    mines
    size
    board
    
    constructor(_width, _height, _mines) {
        this.width = _width
        this.height = _height
        this.mines = _mines
        this.size = _width * _height
        this.board = []
    }

    createBoard() {
        this.board = Array(this.height).fill().map(() => Array(this.width).fill(new Cell()))
        console.log(random.getRandomIntInclusive(0, this.size-1))
    }

    displayBoard() {
        console.log(this.width)
        console.log(this.height)
        console.log(this.board)
    }
}