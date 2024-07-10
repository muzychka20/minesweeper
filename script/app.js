import { BoardInterface } from './classes/board/BoardInterface.js'
import { Timer } from './classes/Timer.js'

let timer = new Timer(document.getElementById('timer'))

document.addEventListener('contextmenu', event => event.preventDefault())

const escapePressed = (event) => {   
    if (event.key === 'Escape') {
        changePages()
    }
}

document.getElementById('buttonNewGame').addEventListener('click', event=> {
    event.preventDefault()    
    timer.stopTimer()
    timer.clearTimer()
    let boardInterface = new BoardInterface(timer)
    if (boardInterface.board) {
        changePages()
    }
})

document.addEventListener('keydown', escapePressed)

function changePages() {
    const menu = document.querySelector('.menu')
    menu.classList.toggle('hide')
    const game = document.querySelector('.game_view')
    game.classList.toggle('display')
}


