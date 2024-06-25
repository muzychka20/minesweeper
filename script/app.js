import { BoardInterface } from './classes/board/BoardInterface.js'

document.addEventListener('contextmenu', event => event.preventDefault())

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
    new BoardInterface()
})

document.addEventListener('keydown', escapePressed)