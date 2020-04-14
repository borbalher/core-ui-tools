module.exports = {
  core :
  {
    locator :
    {
      'core/listener/error'           : `${__dirname}/error`,
      'core/listener/info'            : `${__dirname}/info`,
      'core/listener/warning'         : `${__dirname}/warning`,
      'core/listener/app-initialized' : `${__dirname}/app-initialized`
    }
  }
}
