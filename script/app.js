import { Board } from './classes/Board.js'


// console.log(width)
// console.log(height)
// console.log(mines)

const escapePressed = (event) => {   
    if (event.key === 'Escape') {
        const menu = document.querySelector('.menu')
        menu.classList.toggle('display')
        const board = document.querySelector('.board')
        board.classList.toggle('hide')
    }
}

document.getElementById('buttonNewGame').addEventListener('click', event=> {
    event.preventDefault()
let width = document.getElementById('width').value
let height = document.getElementById('height').value
let mines = document.getElementById('mines').value    
let b = new Board(width, height, mines)
b.createBoard()
b.setMines()
b.setDigits()
b.displayBoard()

})

document.addEventListener('keydown', escapePressed)