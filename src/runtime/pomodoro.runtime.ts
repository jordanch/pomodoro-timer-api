import diff from "date-fns/difference_in_milliseconds"

export class Pomodoro {
  running: boolean
  public id: number
  public startedAt: Date
  public stoppedAt: Date | undefined
  constructor(id: number, startedAt: Date = new Date()) {
    this.id = id
    this.startedAt = startedAt
    this.running = true
  }

  get elapsedMs() {
    return diff(new Date(), new Date(this.startedAt))
  }

  stop() {
    this.stoppedAt = new Date()
    this.running = false
  }
}
