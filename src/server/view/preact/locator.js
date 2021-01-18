const HttpViewPreact = require('.')

class HttpViewPreactLocator
{
  locate()
  {
    return new HttpViewPreact({
      renderToString : require('preact-render-to-string'),
      html           : require('htm/preact').html
    })
  }
}

module.exports = HttpViewPreactLocator
