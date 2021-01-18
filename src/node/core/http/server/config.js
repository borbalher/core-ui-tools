module.exports =
{
  core :
  {
    bootstrap :
    {
      'http/server/route/builder' : 'core/http/server/route/builder/bootstrap'
    },
    locator :
    {
      'core/http/server/dispatcher/chain'                        : require(`${__dirname}/dispatcher/chain/locator`),
      'core/http/server/dispatcher/collection/builder'           : require(`${__dirname}/dispatcher/collection/builder/locator`),
      'core/http/server/request/builder'                         : require(`${__dirname}/request/builder/locator`),
      'core/http/server/route/builder/bootstrap'                 : require(`${__dirname}/route/builder/bootstrap/locator`),
      'core/http/server/route/builder/dto/builder/request-body'  : require(`${__dirname}/route/builder/dto/builder/request-body/locator`),
      'core/http/server/route/builder/dto/builder/request-query' : require(`${__dirname}/route/builder/dto/builder/request-query/locator`),
      'core/http/server/route/builder/dto/builder/request-url'   : require(`${__dirname}/route/builder/dto/builder/request-url/locator`),
      'core/http/server/route/builder'                           : require(`${__dirname}/route/builder/locator`),
      'core/http/server/session/builder'                         : require(`${__dirname}/session/builder/locator`),
      'core/http/server/view/json'                               : require(`${__dirname}/view/json/locator`),
      'core/http/server/view/stream'                             : require(`${__dirname}/view/stream/locator`),
      'core/http/server/view/text'                               : require(`${__dirname}/view/text/locator`),
      'core/http/server/view'                                    : require(`${__dirname}/view/locator`),
      'core/http/server'                                         : require(`${__dirname}/locator`),
    },
    http :
    {
      server :
      {
        timeout : 30e3,
        route   :
        {
          builder :
          {
            dto :
            {
              builders :
              {
                'request-body'  : 'core/http/server/route/builder/dto/builder/request-body',
                'request-query' : 'core/http/server/route/builder/dto/builder/request-query',
                'request-url'   : 'core/http/server/route/builder/dto/builder/request-url'
              }
            }
          }
        }
      }
    }
  }
}
