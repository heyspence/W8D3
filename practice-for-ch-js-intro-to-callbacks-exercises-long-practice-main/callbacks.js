class Clock {
  constructor(date, hrs, min, sec) {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
    this.date = new Date()
    this.hrs = this.date.getHours()
    this.min = this.date.getMinutes()
    this.sec = this.date.getSeconds()
    this.printTime()
    setInterval(_tick.bind(this.date), 1000)
    debugger
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    console.log(`${this.hrs}:${this.min}:${this.sec}`)
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    return sec + 1
    this.printTime()
    if (this.sec > 60) {
        this.sec = 0
        this.min += 1
    }
  }
}

const clock = new Clock()