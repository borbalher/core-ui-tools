module.exports = {
  core :
  {
    bootstrap :
    {
      handlebars : 'core/handlebars/bootstrap'
    },
    locator :
    {
      'core/handlebars/bootstrap' : require(`${__dirname}/bootstrap/locator`)
    }
  }
}

