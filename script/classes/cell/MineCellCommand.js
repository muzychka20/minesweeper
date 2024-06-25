import { CellCommand } from './CellCommand.js'

export class MineCellCommand extends CellCommand {
    execute(cell) {
        cell.classList.add('mine')
    }
}