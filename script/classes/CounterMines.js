export class CounterMines {
    amount
    maxAmount
    element

    constructor(element) {
        this.element = element
        this.amount = 0
    }

    addMine() {
        if (this.amount < this.maxAmount) {
            this.amount++
            this.changeInterface()
            return true
        }
        return false
    }

    removeMine() {
        this.amount--
        this.changeInterface()
    }

    changeInterface() {
        this.element.innerHTML = 'Mines: ' + this.amount + '/' + this.maxAmount
    }

    setMaxMines(maxAmount) {
        this.maxAmount = maxAmount
    }
}