import { CellCommand } from './CellCommand.js'

export class OpenCellCommand extends CellCommand {
    execute(cell) {
        cell.classList.add('open')
    }
}