const config = {
  core :
  {
    locator :
    {
      'view/preact' : require(`${__dirname}/preact/locator`),
      'view/page'   : require(`${__dirname}/page/locator`)
    }
  }
}

module.exports = config