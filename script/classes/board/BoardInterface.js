import { Board } from './Board.js'
import { OpenCellCommand } from '../cell/OpenCellCommand.js'
import { NumberCellCommand } from '../cell/NumberCellCommand.js'
import { ClosedCellCommand } from '../cell/ClosedCellCommand.js'
import { FlaggedCellCommand } from '../cell/FlaggedCellCommand.js'
import { MineCellCommand } from '../cell/MineCellCommand.js'
import { RemoveClassCommand } from '../cell/RemoveClassCommand.js';
import { ToggleClassCommand } from '../cell/ToggleClassCommand.js';
import { Timer } from '../Timer.js'

export class BoardInterface {
    board = null
    timer = null

    constructor(timer) {
        let width = document.getElementById('width').value
        let height = document.getElementById('height').value
        let mines = document.getElementById('mines').value
        if (width * height <= mines) {
            alert("Enter the correct amount of mines!")
        } else {
            this.board = new Board(width, height, mines)
            this.board.createBoard()
            this.setBoard()            
            this.timer = timer
        }
    }

    setBoard() {        
        let boardContainer = document.querySelector('.board')
        boardContainer.innerHTML = ""
        for (let i = 0; i < this.board.getHeight(); i++) {
            let row = document.createElement('div')
            row.classList.add('row')
            for (let j = 0; j < this.board.getWidth(); j++) {
                let cellBlock = document.createElement('div')
                cellBlock.setAttribute('id', 'cell')
                let closedCellCommand = new ClosedCellCommand()
                closedCellCommand.execute(cellBlock)
                cellBlock.addEventListener('mousedown', event => {
                    if (event.button === 0) {
                        this.leftClickOnCell(i, j)
                    } else if (event.button === 2) {
                        this.rightClickOnCell(i, j)
                    }
                })
                row.appendChild(cellBlock)
            }
            boardContainer.appendChild(row)
        }
    }

    getCell(i, j) {
        return document.querySelector('.board').childNodes[i].childNodes[j]
    }

    leftClickOnCell(i, j) {        
        if (this.board.isFirstClick()) {
            this.board.setMines(i, j)
            this.board.setDigits()
            this.board.makeFirstClick()
            this.timer.startTimer()
            // this.timer = new Timer(document.getElementById('timer'))
        }
        this.board.deleteFlag(i, j)
        let removeClassCommand = new RemoveClassCommand('flagged_yellow')
        removeClassCommand.execute(this.getCell(i, j))
        if (this.board.isMine(i, j)) {
            this.displayMines()
            setTimeout(() => {
                alert('You lose!')
            }, 100)
            this.removeEventListeners()
            this.timer.stopTimer()
            return
        }
        this.board.openCell(i, j)
        this.displayOpenCells()
        if (this.board.checkVictory()) {
            this.displayVictoryFlags()
            setTimeout(() => {
                alert('You win!')
            }, 100)
            this.removeEventListeners()
            this.timer.stopTimer()
        }
    }

    rightClickOnCell(i, j) {
        if (!this.board.isOpen(i, j)) {
            this.board.setFlag(i, j)
            let toggleClassCommand = new ToggleClassCommand('flagged_yellow')
            toggleClassCommand.execute(this.getCell(i, j))
        }
    }

    removeEventListeners() {
        for (let i = 0; i < this.board.getHeight(); i++) {
            for (let j = 0; j < this.board.getWidth(); j++) {
                let cell = this.getCell(i, j)
                let newCell = cell.cloneNode(true)
                cell.parentNode.replaceChild(newCell, cell)
            }
        }
    }

    displayMines() {           
        for (let i = 0; i < this.board.getHeight(); i++) {
            for (let j = 0; j < this.board.getWidth(); j++) {
                if (this.board.isMine(i ,j) && this.board.isFlagged(i, j)) {                    
                    let flaggedCellCommand = new FlaggedCellCommand('green')
                    flaggedCellCommand.execute(this.getCell(i, j))
                }
                else if (this.board.isFlagged(i, j)) {
                    let flaggedCellCommand = new FlaggedCellCommand('red')
                    flaggedCellCommand.execute(this.getCell(i, j))
                }                
                else if (this.board.isMine(i ,j)) {
                    let mineCellCommand = new MineCellCommand()
                    mineCellCommand.execute(this.getCell(i, j))
                }
            }
        }        
    }

    displayOpenCells() {        
        let openCellCommand = new OpenCellCommand()
        let removeClosed = new RemoveClassCommand('closed')
        for (let i = 0; i < this.board.getWidth(); i++) {            
            for (let j = 0; j < this.board.getHeight(); j++) {                  
                if (this.board.isOpen(i, j)) {
                    let cell = this.getCell(i, j)                    
                    openCellCommand.execute(cell)
                    let quantity = this.board.getQuantity(i, j)
                    let numberCellCommand = new NumberCellCommand(quantity)
                    numberCellCommand.execute(cell)
                    removeClosed.execute(cell)
                }    
            }
        }
    }

    displayVictoryFlags() {
        for (let i = 0; i < this.board.getHeight(); i++) {
            for (let j = 0; j < this.board.getWidth(); j++) {
                if (this.board.isMine(i, j)) {
                    let flaggedCellCommand = new FlaggedCellCommand('green')
                    flaggedCellCommand.execute(this.getCell(i, j))
                }
            }
        }
    }

}
