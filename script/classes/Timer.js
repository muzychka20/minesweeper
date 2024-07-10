export class Timer {
    seconds
    interval
    element

    constructor(element) {        
        this.timeout = this.timeout.bind(this)
        this.element = element        
    }

    startTimer() {
        this.seconds = 1
        this.interval = setInterval(this.timeout, 1000)    
    }

    timeout() {        
        this.element.innerHTML = 'Seconds: ' + this.seconds
        this.seconds++
    }

    stopTimer() {
        clearInterval(this.interval)
    }

    clearTimer() {
        this.element.innerHTML = 'Seconds: 0'
    }
}
