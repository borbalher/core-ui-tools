module.exports = {
  core :
  {
    reducer :
    {
      actions :
      {
        'redirect'   : 'ui/page/action/redirect',
        'show.alert' : 'ui/alert/action/show-alert'
      }
    },
    locator :
    {
      'ui/page/action/redirect'   : `${__dirname}/action/redirect`,
      'ui/page/action/show-alert' : `${__dirname}/action/show-alert`
    }
  }
}
