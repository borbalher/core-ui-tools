module.exports = {
  core :
  {
    bus :
    {
      channels :
      {
        'store' : {
          listeners : {
            'state.changed' :
            {
              'view-model/listener/state-changed' : true
            }
          }
        }
      }
    },
    locator :
    {
      'core/view-model'                   : __dirname,
      'view-model/listener/state-changed' : `${__dirname}/listener/state-changed`
    }
  }
}
