const Console = require('core-ui-tools/common/core/console')

class BrowserConsole extends Console
{
  constructor(...args)
  {
    super(...args)

    this.color      = this.config.color
    this.background = this.config.background
  }

  buildOutput(args)
  {
    const
    output    = super.buildOutput(args),
    colorized = this.colorize(output)

    return colorized
  }

  colorize(output)
  {
    let css = ''

    if(this.color)
      css = `color:${this.color};`

    if(this.background)
      css = `${css}background-color:${this.background};`

    if(this.config.css)
      css = `${css}${this.config.css}`

    return this.coreString.trim(css) !== '' ? [`%c${output[0]}`, css] : output
  }
}

module.exports = BrowserConsole
