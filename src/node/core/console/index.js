/* eslint-disable no-control-regex */
class Console
{
  constructor(util, dateformat, config, console, coreString)
  {
    this.index      = 0
    this.coreString = coreString
    this.util       = util
    this.dateformat = dateformat
    this.config     = config
    this.console    = console

    this.util.inspect.styles = { ...this.util.inspect.styles, ...this.getInspectStyles() }
    this.color               = this.getFontColor(this.config.color)
    this.background          = this.getBackgroundColor(this.config.background)
  }

  getInspectOptions()
  {
    return this.config.inspect && this.config.inspect.options ? this.config.inspect.options : {}
  }

  getInspectStyles()
  {
    return this.config.inspect && this.config.inspect.styles ? this.config.inspect.styles : {}
  }

  shortenString(s)
  {
    if(this.config.maxStringLength && s.length > this.config.maxStringLength)
      return this.coreString.shorten(s, this.config.maxStringLength)

    return s
  }

  formatOutputString(s)
  {
    const
    noControlCharacters = this.removeControlCharacters(s),
    formatted           = this.shortenString(noControlCharacters)

    return formatted
  }

  getCurrentDate()
  {
    if(this.config.dateFormat)
      return this.dateformat(new Date(), this.config.dateFormat)

    return new Date().toISOString()
  }

  stringifyObject(arg)
  {
    const
    replacer = this.config.stringify && this.config.stringify.replacer ? this.config.stringify.replacer : null,
    space    = this.config.stringify && this.config.stringify.space ? this.config.stringify.space : ' '

    return JSON.stringify(arg, replacer, space)
  }

  buildArg(arg)
  {
    if(typeof arg === 'object' && this.config.inspect)
      return this.inspectObject(arg)
    else if(typeof arg === 'object' && this.config.stringify)
      return this.stringifyObject(arg)
    else if(typeof arg === 'string')
      return this.formatOutputString(arg)

    return arg
  }

  buildArgs(args)
  {
    const output = []
    for(const arg of args)
      output.push(this.buildArg(arg))
    return output
  }

  getFontColor(color)
  {
    switch(color)
    {
    case 'black'    : return '30'
    case 'blue'     : return '34'
    case 'cyan'     : return '36'
    case 'green'    : return '32'
    case 'magenta'  : return '35'
    case 'red'      : return '31'
    case 'yellow'   : return '33'
    case 'white'    : return '37'
    }
  }

  getBackgroundColor(color)
  {
    switch(color)
    {
    case 'black'    : return '40'
    case 'blue'     : return '44'
    case 'cyan'     : return '46'
    case 'green'    : return '42'
    case 'magenta'  : return '45'
    case 'red'      : return '41'
    case 'yellow'   : return '43'
    case 'white'    : return '37'
    }
  }

  removeControlCharacters(s)
  {
    // eslint-disable-next-line no-control-regex
    return s.replace(/[\x00-\x09\x10-\x1F]/g, '')
  }

  colorize(output)
  {
    let outputSTR = output[0]

    if(this.color)
      outputSTR = `\x1b[${this.color}m${outputSTR}`

    if(this.background)
      outputSTR = `\x1b[${this.background}m${outputSTR}`

    if(this.background || this.color)
      outputSTR = `${outputSTR}\x1b[0m`

    return [outputSTR]
  }

  buildOutput(args)
  {
    let output = []

    if(this.config.date)
      output.push(this.getCurrentDate())

    if(this.config.prefix)
      output.push(this.config.prefix)

    if(this.config.index)
      output.push(this.index)

    output = [output.concat(this.buildArgs(args)).join(this.config.separator)]

    return this.colorize(output)
  }

  inspectObject(obj)
  {
    const
    inspectOptions = this.getInspectOptions(),
    inspectString  = this.util.inspect(obj, inspectOptions)

    return inspectString
  }

  output(args, cb)
  {
    this.index = this.index < Number.MAX_SAFE_INTEGER ? this.index + 1 : 0
    if(this.config.debug)
    {
      const output = this.buildOutput(args)

      cb.apply(this, output)
    }
  }

  log(...args)
  {
    this.output(args, this.console.log)
  }

  info(...args)
  {
    this.output(args, this.console.log)
  }

  warning(...args)
  {
    this.output(args, this.console.warn)
  }

  error(...args)
  {
    this.output(args, this.console.error)
  }

  trace(...args)
  {
    this.output(args, this.console.trace)
  }

  table(...args)
  {
    this.output(args, this.console.table)
  }

  startTimer(label)
  {
    this.console.time(label)
  }

  getTimeLog(label)
  {
    this.console.timeLog(label)
  }

  finishTimer(label)
  {
    this.console.timeEnd(label)
  }

  group(collapsed, label)
  {
    if(collapsed)
      this.console.groupCollapsed(label)
    else
      this.console.group(label)
  }

  clear()
  {
    this.console.clear()
  }

  groupEnd()
  {
    this.console.groupEnd()
  }

  async measureTime(label, cb, ...args)
  {
    return new Promise(async (resolve, reject) =>
    {
      try
      {
        this.startTimer(label)

        const result = await cb(args)

        this.finishTimer(label)
        resolve(result)
      }
      catch(error)
      {
        this.finishTimer(label)
        reject(error)
      }
    })
  }
}

module.exports = Console
