/* eslint-disable no-control-regex */
class Console
{
  constructor({
    util,
    dateformat,
    config,
    console,
    coreString
  })
  {
    this.index      = 0
    this.coreString = coreString
    this.util       = util
    this.dateformat = dateformat
    this.config     = config
    this.console    = console

    this.util.inspect.styles = { ...this.util.inspect.styles, ...this.getInspectStyles() }
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
    return this.shortenString(s)
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

  buildOutput(args)
  {
    let output = []

    if(this.config.date)
      output.push(this.getCurrentDate())

    if(this.config.prefix)
      output.push(this.config.prefix)

    if(this.config.index)
      output.push(this.index)

    output = output.concat(this.buildArgs(args))

    return [output.join(this.config.separator)]
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
