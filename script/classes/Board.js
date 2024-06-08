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

    setDigits() {
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                let minesAmount = 0
                for (let k = 0; k < neighbourhood.neighboursPairs.length; k++) {                    
                    let row = i + neighbourhood.neighboursPairs[k].first
                    let col = j + neighbourhood.neighboursPairs[k].second
                    if (row < this.height && row >= 0 &&
                        col >= 0 && col < this.width &&
                        this.board[row][col].mine) {
                            minesAmount++;
                    }
                }
                this.board[i][j].quantityNearbyMines = minesAmount
            }
        }
    }

    displayBoard() {
        console.log(this.board) 
        for (let i = 0; i < this.height; i++) {
            let row = document.createElement('div')
            row.classList.add('row')
            for (let j = 0; j < this.width; j++) {
                let cellBlock = document.createElement('div')
                cellBlock.setAttribute('id', 'cell')
                cellBlock.classList.add('closed')
                row.appendChild(cellBlock)
            }
            document.querySelector('.board').appendChild(row)
        }
    }
}