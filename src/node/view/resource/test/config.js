module.exports = {
  core :
  {
    resource :
    {
      directory : `${__dirname}/public`
    },
    http :
    {
      server :
      {
        routes :
        {
          resource :
          {
            url      : '/resource/.+',
            method   : 'get',
            endpoint : 'node/core/resource',
            input    : false
          }
        }
      }
    }
  }
}
