module.exports = {
  core :
  {
    locator :
    {
      'core/view-model'                   : __dirname,
      'view-model/listener/state-changed' : `${__dirname}/listener/state-changed`
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
              'view-model/listener/state-changed' : true
            }
          }
        }
      }
    }
  }
}
