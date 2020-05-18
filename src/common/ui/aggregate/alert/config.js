module.exports = {
  core :
  {
    reducer :
    {
      actions :
      {
        'show.alert' : 'ui/alert/action/show-alert'
      }
    },
    locator :
    {
      'ui/alert/action/show-alert' : `${__dirname}/action/show-alert`
    }
  }
}
