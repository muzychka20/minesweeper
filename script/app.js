import { BoardInterface } from './classes/board/BoardInterface.js'

document.addEventListener('contextmenu', event => event.preventDefault())

const escapePressed = (event) => {   
    if (event.key === 'Escape') {
        changePages()
    }
}

document.getElementById('buttonNewGame').addEventListener('click', event=> {
    event.preventDefault() 
    let boardInterface = new BoardInterface()
    if (boardInterface.board) {
        changePages()
    }
})

document.addEventListener('keydown', escapePressed)

function changePages() {
    const menu = document.querySelector('.menu')
    menu.classList.toggle('hide')
    const board = document.querySelector('.board')
    board.classList.toggle('display')
}


