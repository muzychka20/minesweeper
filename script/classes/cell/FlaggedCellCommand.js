import { CellCommand } from './CellCommand.js'

export class FlaggedCellCommand extends CellCommand {
    constructor(type) {
        super()
        this.nameClass = 'flagged_' + type
    }

    execute(cell) {
        cell.classList.add(this.nameClass)        
    }
}