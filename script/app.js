import { Board } from './classes/Board.js'

let width = document.getElementById('width').value
let height = document.getElementById('height').value
let mines = document.getElementById('mines').value
console.log(width)
console.log(height)
console.log(mines)

let b = new Board(width, height, mines)
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