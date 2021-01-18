module.exports = {
  core :
  {
    bootstrap :
    {
      process : 'core/process/bootstrap'
    },
    locator :
    {
      'core/process'           : require(`${__dirname}/locator`),
      'core/process/bootstrap' : require(`${__dirname}/bootstrap/locator`),
    }
  }
}
