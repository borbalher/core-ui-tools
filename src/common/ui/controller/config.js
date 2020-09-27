module.exports = {
  core :
  {
    bootstrap :
    {
      'ui/text-input-group' : 'ui/text-input-group/bootstrap'
    },
    locator :
    {
      'ui/text-input-group/bootstrap' : `${__dirname}/text-input-group/bootstrap`,
      'ui/controller/factory'         : __dirname
    }
  }
}
