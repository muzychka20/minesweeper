import { CellCommand } from './CellCommand.js';

export class ToggleClassCommand extends CellCommand {
    constructor(className) {
        super();
        this.className = className;
    }

    execute(cell) {
        cell.classList.toggle(this.className);
    }
}