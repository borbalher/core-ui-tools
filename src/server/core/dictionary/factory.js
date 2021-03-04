const Internationalization = require('.')

class InternationalizationFactory
{
  constructor({
    fallbackLocale,
    dictionaries,
    locale
  })
  {
    this.fallbackLocale = fallbackLocale
    this.dictionaries   = dictionaries
    this.locale         = locale
  }

  create({
    fallbackLocale = this.fallbackLocale,
    locale  = this.locale,
    dictionaries = {}
  })
  {
    return new Internationalization({
      dictionaries : { ...this.dictionaries, ...dictionaries },
      fallbackLocale,
      locale
    })
  }
}

module.exports = InternationalizationFactory
