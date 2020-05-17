module.exports = {
  core :
  {
    'view-model' :
    {
      id     : 'test',
      schema : 'entity/test',
      state  : {}
    },
    schema :
    {
      composer :
      {
        'entity/test' : `${__dirname}/schema/entity/test`
      }
    },
    locator :
    {
      'ui/test/composer' : `${__dirname}/composer`
    }
  }
}
