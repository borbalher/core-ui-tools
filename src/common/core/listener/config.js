module.exports = {
  core :
  {
    locator :
    {
      'core/listener/error'           : require(`${__dirname}/error/locator`),
      'core/listener/info'            : require(`${__dirname}/info/locator`),
      'core/listener/warning'         : require(`${__dirname}/warning/locator`),
      'core/listener/app-initialized' : require(`${__dirname}/app-initialized/locator`),
    }
  }
}
