import { CellCommand } from './CellCommand.js'

export class ClosedCellCommand extends CellCommand {
    execute(cell) {
        cell.classList.add('closed')
    }
}