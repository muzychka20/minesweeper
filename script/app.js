import { Board } from './classes/Board.js'

let b = new Board(9, 9, 10)
b.createBoard()
b.setMines()
b.setDigits()
b.displayBoard()

const escapePressed = () => {   
    const menu = document.querySelector('.menu')
    menu.classList.toggle('display')
    const board = document.querySelector('.board')
    board.classList.toggle('hide')
}

document.addEventListener('keydown', escapePressed)