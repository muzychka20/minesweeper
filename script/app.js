import { Board } from './classes/Board.js'

let b = new Board(9, 9, 10)
b.createBoard()
b.setMines()
b.setDigits()
b.displayBoard()