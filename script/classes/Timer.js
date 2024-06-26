export class Timer {
    seconds
    interval
    element

    constructor(element) {
        this.seconds = 1
        this.timeout = this.timeout.bind(this)
        this.element = element
        this.interval = setInterval(this.timeout, 1000)
    }

    timeout() {
        this.element.innerHTML = 'Seconds: ' + this.seconds
        this.seconds++
    }

    stopTimer() {
        clearInterval(this.interval)
    }
}
