const config =
{
  core :
  {
    locator :
    {
      'view/preact' : `${__dirname}`
    }
  },
  view :
  {
    preact :
    {
      components : {
        'App' : `${__dirname}/component/app/factory`
      }
    },
  }
}

module.exports = config
