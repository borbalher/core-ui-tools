const CoreConsole = require('../../../common/core/console')

class NodeConsole extends CoreConsole
{
  constructor(...args)
  {
    super(...args)

    this.color      = this.getFontColor(this.config.color)
    this.background = this.getBackgroundColor(this.config.background)
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

  formatOutputString(s)
  {
    const
    noControlCharacters = this.removeControlCharacters(s),
    formatted           = super.formatOutputString(noControlCharacters)

    return formatted
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
    let outputSTR = output[0]

    if(this.color)
      outputSTR = `\x1b[${this.color}m${outputSTR}`

    if(this.background)
      outputSTR = `\x1b[${this.background}m${outputSTR}`

    if(this.background || this.color)
      outputSTR = `${outputSTR}\x1b[0m`

    return [outputSTR]
  }
}

module.exports = NodeConsole
