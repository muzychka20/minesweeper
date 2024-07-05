import { CellCommand } from './CellCommand.js'

export class MineCellCommand extends CellCommand {
    execute(cell) {
        cell.className = ''
        cell.classList.add('mine')
    }
}