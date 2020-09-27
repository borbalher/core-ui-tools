const Dispatcher = require('node/core/http/server/dispatcher')

class LangExtractorMiddleware extends Dispatcher
{
  getCookieLang(headers)
  {
    const
    name            = 'LANG=',
    decodedCookies  = decodeURIComponent(headers['cookie']),
    cookies         = decodedCookies.split(';')

    for(let cookie of cookies)
    {
      while(cookie.charAt(0) === ' ')
        cookie = cookie.substring(1)

      if(cookie.indexOf(name) === 0)
        return cookie.substring(name.length, cookie.length)
    }

    return undefined
  }

  getLang(headers, query)
  {
    return this.getCookieLang(headers) || query.lang || this.locator.locate('core/configuration').find('core.dictionary.fallBackLanguage')
  }

  async dispatch(next)
  {
    this.session.lang = this.getLang(this.request.headers, this.request.query)

    await next()
  }
}

module.exports = LangExtractorMiddleware
