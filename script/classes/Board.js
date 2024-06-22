import * as random from '../modules/getRandom.js'
import * as neighbourhood from '../modules/neighbourhood.js'
import { Cell } from '../classes/Cell.js'

export class Board {
    width
    height
    minesQuantity
    size
    board

    constructor(_width, _height, _mines) {
        this.width = _width
        this.height = _height
        this.minesQuantity = _mines
        this.size = _width * _height
        this.board = []
    }

    createBoard() {
        for (let i = 0; i < this.height; i++) {
            let row = []
            for (let j = 0; j < this.width; j++) {
                row.push(new Cell())
            }
            this.board.push(row)
        }
    }

    setMines() {
        let placedMines = 0
        while (placedMines < this.minesQuantity) {
            let position = random.getRandomIntInclusive(0, this.size - 1)
            let row = Math.floor(position / this.width)
            let col = position % this.width
            if (!this.board[row][col].mine) {
                this.board[row][col].mine = true
                placedMines++
            }
        }
    }

    isValidCordinates(row, col) {
        if (row < this.height && row >= 0 &&
            col >= 0 && col < this.width) {
            return true
        }
        return false
    }

    setDigits() {
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                let minesAmount = 0
                if (this.board[i][j].mine) {
                    this.board.quantityNearbyMines = minesAmount
                    continue
                }
                for (let k = 0; k < neighbourhood.neighboursPairs.length; k++) {
                    let row = i + neighbourhood.neighboursPairs[k].first
                    let col = j + neighbourhood.neighboursPairs[k].second
                    if (this.isValidCordinates(row, col) && this.board[row][col].mine) {
                        minesAmount++
                    }
                }
                this.board[i][j].quantityNearbyMines = minesAmount
            }
        }
    }

    openCell(i, j) {
        if (!this.isValidCordinates(i, j) || this.board[i][j].open) {
            return
        }
        this.board[i][j].open = true
        if (this.board[i][j].quantityNearbyMines === 0) {
            for (let k = 0; k < neighbourhood.neighboursPairs.length; k++) {
                let row = i + neighbourhood.neighboursPairs[k].first
                let col = j + neighbourhood.neighboursPairs[k].second
                this.openCell(row, col)
            }
        }
        this.displayBoard()
      
    }

    displayMines() {
        let board =  document.querySelector('.board')
        // console.log(board.childNodes[0].childNodes[0])
        for (let i = 0; i < this.height; i++) {
            let row = board.childNodes[i]
            // console.log(row)
            for (let j = 0; j < this.width; j++) {
                let cell = row.childNodes[j]

                if (this.board[i][j].mine) {
                    if (this.board[i][j].flagged) {
                        cell.classList.add('flagged_green')
                    } else {
                        cell.classList.add('mine')

                    }
                    // board.childNodes[i].childNodes[j].classList.add('mine')
                } else {
                    if (this.board[i][j].flagged) {
                        cell.classList.add('flagged_red')
                    } 
                }
                // console.log(cell)
            }

        }
    }

    checkVictory() {
        let count = 0
        let amount = 0
        for (let i = 0; i < this.height; i++) {
            
            for (let j = 0; j < this.width; j++) {
                // if (this.board[i][j].flagged && this.board[i][j].mine) {
                //     count++
                // }
                // if (this.board[i][j].flagged) {
                //     amount++
                // }
                if (this.board[i][j].open) {
                    count++
                }
            }
            
        }
        console.log(count===(this.size-this.minesQuantity))
      return count===(this.size-this.minesQuantity)
    }

    displayBoard() {
        // console.log(this.board)
        
        document.querySelector('.board').innerHTML = ""
        for (let i = 0; i < this.height; i++) {
            let row = document.createElement('div')
            row.classList.add('row')
            for (let j = 0; j < this.width; j++) {
                let cellBlock = document.createElement('div')
                cellBlock.setAttribute('id', 'cell')
                if (this.board[i][j].flagged) {
                    cellBlock.classList.add('flagged_yellow')
                    this.board[i][j].flagged = true
                }
                else if (!this.board[i][j].open) {
                    cellBlock.classList.add('closed')
                } else {
                    cellBlock.classList.add('open')
                    let amount = this.board[i][j].quantityNearbyMines
                    if (amount) {
                        let numberSpan = document.createElement('span')
                        switch (this.board[i][j].quantityNearbyMines) {
                            case 1:
                                numberSpan.classList.add('one')
                                numberSpan.innerHTML = '1'
                                break
                            case 2:
                                numberSpan.classList.add('two')
                                numberSpan.innerHTML = '2'
                                break
                            case 3:
                                numberSpan.classList.add('three')
                                numberSpan.innerHTML = '3'
                                break
                            case 4:
                                numberSpan.classList.add('four')
                                numberSpan.innerHTML = '4'
                                break
                            case 5:
                                numberSpan.classList.add('five')
                                numberSpan.innerHTML = '5'
                                break
                            case 6:
                                numberSpan.classList.add('six')
                                numberSpan.innerHTML = '6'
                                break
                            case 7:
                                numberSpan.classList.add('seven')
                                numberSpan.innerHTML = '7'
                                break
                            case 8:
                                numberSpan.classList.add('eight')
                                numberSpan.innerHTML = '8'
                                break
                        }
                        cellBlock.appendChild(numberSpan)
                    }

                }
                cellBlock.addEventListener('mousedown', event => {
                    
                    if (event.button == 0) {
                        this.board[i][j].flagged = false
                        if (this.board[i][j].mine) {
                            alert("mine")

                            if (this.board[i][j].mine) {
                                // cellBlock.classList.add('mine')
                                this.displayMines()
                                alert('You lose!')
                                return
                            }
                        
                        }
                        this.openCell(i, j)
                        if (this.checkVictory()) {
                            alert('You win!')
                            console.log("we")
                        }
                    } else if (event.button == 2) {
                        alert('2')
                        if (!this.board[i][j].open) {
                            cellBlock.classList.add('flagged_yellow')
                            this.board[i][j].flagged = true
                        }
                    }
                })
                row.appendChild(cellBlock)
            }

            document.querySelector('.board').appendChild(row)
        }
      
        
    }
}