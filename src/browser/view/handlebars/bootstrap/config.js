module.exports = {
  core :
  {
    bootstrap :
    {
      'handlebars/partials' : 'view/handlebars/partials/bootstrap'
    },
    locator :
    {
      'view/handlebars/partials/bootstrap' : require(`${__dirname}/locator`)
    }
  }
}

