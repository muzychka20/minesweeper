import { Board } from './classes/Board.js'

let b = new Board(3, 4, 4)
b.createBoard()
b.setMines()
b.setDigits()
b.displayBoard()