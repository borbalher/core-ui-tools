class Timer
{
  now()
  {
    return new Date().getTime()
  }

  msToSeconds(ms)
  {
    return ms / 1000
  }

  msToMinutes(ms)
  {
    return this.msToSeconds(ms) / 60
  }

  msToMinutesWithSeconds(ms)
  {
    const
    date    = new Date(ms),
    minutes = `${date.getUTCMinutes()}`.slice(-2),
    seconds = `${date.getUTCMinutes()}`.slice(-2)
    return `${minutes}:${seconds}`
  }

  convert(time, format)
  {
    switch(format)
    {
    case 's':
      return this.msToSeconds(time)
    case 'm':
      return this.msToMinutes(time)
    case 'mm:ss':
      return this.msToMinutesWithSeconds(time)
    default:
      return time
    }
  }
}

module.exports = Timer
