module.exports = {
  core :
  {
    locator :
    {
      'core/view-model/listener/on-state-changed' : `${__dirname}/listener/on-state-changed`,
      'core/view-model'                           : __dirname
    }
  },
  infrastructure :
  {
    bus :
    {
      channels :
      {
        'store' :
        {
          listeners :
          {
            'state.changed' :
            {
              'core/view-model/listener/on-state-changed' : true
            }
          }
        }
      }
    }
  }
}
