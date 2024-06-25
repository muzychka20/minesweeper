import { CellCommand } from './CellCommand.js'

export class NumberCellCommand extends CellCommand {
    constructor(number) {
        super()
        this.number = number
    }

    execute(cell) {
        cell.classList.add(this.numberToClass(this.number))
        if (this.number) {
            cell.innerHTML = this.number.toString()
        }
    }

    numberToClass(number) {
        const classes = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']
        return classes[number - 1]
    }
}