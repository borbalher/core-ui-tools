module.exports = {
  core :
  {
    reducer :
    {
      actions :
      {
        'redirect'   : 'ui/page/action/redirect',
        'show.alert' : 'ui/page/action/show-alert'
      }
    },
    locator :
    {
      'ui/page/action/redirect'   : `${__dirname}/redirect`,
      'ui/page/action/show-alert' : `${__dirname}/show-alert`
    }
  }
}
