module.exports = {
  core :
  {
    reducer :
    {
      actions :
      {
        'reload'     : 'ui/page/action/reload',
        'redirect'   : 'ui/page/action/redirect',
        'show.alert' : 'ui/page/action/show-alert'
      }
    },
    locator :
    {
      'ui/page/action/reload'     : `${__dirname}/reload`,
      'ui/page/action/redirect'   : `${__dirname}/redirect`,
      'ui/page/action/show-alert' : `${__dirname}/show-alert`
    }
  }
}
