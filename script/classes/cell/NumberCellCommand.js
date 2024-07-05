import { CellCommand } from './CellCommand.js'

export class NumberCellCommand extends CellCommand {
    constructor(number) {
        super()
        this.number = number
    }

    execute(cell) {
        if (this.number - 1 >= 0) {
            cell.classList.add(this.numberToClass(this.number))
            cell.innerHTML = this.number.toString()
        }
    }

    numberToClass(number) {
        const classes = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']
        return classes[number - 1]
    }
}