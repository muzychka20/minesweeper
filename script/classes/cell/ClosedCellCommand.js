import { CellCommand } from './CellCommand.js'

export class ClosedCellCommand extends CellCommand {
    execute(cell) {
        cell.className = ''
        cell.classList.add('closed')
    }
}