import { CellCommand } from './CellCommand.js'

export class RemoveClassCommand extends CellCommand {
    constructor(className) {
        super()
        this.className = className
    }

    execute(cell) {
        cell.classList.remove(this.className)
    }
}
