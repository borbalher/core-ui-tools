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
            'component-changed' :
            {
              'listener/listener/component-changed' : true
            }
          }
        }
      }
    },
    locator :
    {
      'core/listener'                       : __dirname,
      'listener/listener/component-changed' : `${__dirname}/listener/component-changed`
    }
  }
}
