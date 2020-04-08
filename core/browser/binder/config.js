module.exports = {
  core :
  {
    bus :
    {
      channels :
      {
        'ui' :
        {
          listeners :
          {
            'component-rendered' :
            {
              'binder/listener/component-rendered' : true
            }
          }
        }
      }
    },
    locator :
    {
      'core/binder'                        : __dirname,
      'binder/listener/component-rendered' : `${__dirname}/listener/component-rendered`
    }
  }
}
