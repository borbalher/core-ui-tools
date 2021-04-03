module.exports = {
  core :
  {
    internationalization :
    {
      locale         : { locale: 'es' },
      fallbackLocale : { locale: 'es' },
      dictionaries   : { }
    },
    locator :
    {
      'core/internationalization' : require(`${__dirname}/locator`)
    }
  }
}
