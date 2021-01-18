module.exports = {
  core :
  {
    bootstrap :
    {
      handlebars : 'view/handlebars/bootstrap'
    },
    locator :
    {
      'view/handlebars/bootstrap' : require(`${__dirname}/bootstrap/locator`)
    }
  }
}

