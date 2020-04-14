module.exports = {
  core :
  {
    bootstrap :
    {
      'core/store' : 'core/store/bootstrap'
    },
    store :
    {
      middlewares : [
        'store/middleware/logger'
      ]
    },
    locator :
    {
      'core/store'              : __dirname,
      'core/store/bootstrap'    : `${__dirname}/bootstrap`,
      'store/middleware/logger' : `${__dirname}/middleware/logger`
      // 'store/listener/dispatch'    : `${__dirname}/listener/dispatch`,
      // 'store/listener/load-state' : `${__dirname}/listener/load-state`
    }
  }
  // infrastructure :
  // {
  //   bus :
  //   {
  //     channels :
  //     {
  //       'app' :
  //       {
  //         listeners :
  //         {
  //           'app.initialized' :
  //           {
  //             'store/listener/load-state' : true
  //           }
  //         }
  //       }

  //       // 'store' :
  //       // {
  //       //   listeners :
  //       //   {
  //       //     'dispatch' :
  //       //     {
  //       //       'store/listener/dispatch' : true
  //       //     }
  //       //   }
  //       // }
  //     }
  //   }
  // }
}
