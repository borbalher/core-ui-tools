module.exports = {
  core :
  {
    locator :
    {
      'ui/page-blocker/composer' : __dirname
    }
  },
  ui :
  {
    component :
    {
      'page-blocker' :
      {
        listeners :
        [
          {
            channel  : 'ui',
            event    : 'toggle.blocker',
            dispatch : true
          }
        ]
      }
    }
  }
}
