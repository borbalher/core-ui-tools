class Metrics
{
  constructor(timer)
  {
    this.metrics  = { }
    this.timer    = timer
  }

  start(name)
  {
    this.metrics[name] = { start: this.timer.now() }
  }

  end(name)
  {
    this.metrics[name] = { ...this.metrics[name], end: this.timer.now() }
  }

  remove(name)
  {
    delete this.metrics[name]
  }

  get(metric)
  {
    return this.metrics[metric]
  }

  getEllapsedTime(metric)
  {
    const { start, end } = this.get(metric) || {}
    if(start && end)
      return end - start
  }

  getEllapsedTimeIn(metric, format)
  {
    const ellapsedTimeInMilliseconds = this.getEllapsedTime(metric)

    if(ellapsedTimeInMilliseconds)
      return this.timer.convert(ellapsedTimeInMilliseconds, format)
  }

  getReport(format = 'ms')
  {
    const report = { format }
    for(const key in this.metrics)
      report[key] = this.getEllapsedTimeIn(key, format)

    return report
  }

  reset()
  {
    this.metrics = {}
  }
}

module.exports = Metrics
