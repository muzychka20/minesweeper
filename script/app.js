import { Board } from './classes/Board.js'

let b = new Board(3, 4, 7)
b.createBoard()
b.setMines()
b.displayBoard()