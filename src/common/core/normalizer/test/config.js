module.exports = {
  core :
  {
    schema :
    {
      composer :
      {
        'entity/foobar'    : `${__dirname}/schema/entity/foobar`,
        'entity/foo'       : `${__dirname}/schema/entity/foo`,
        'entity/bar'       : `${__dirname}/schema/entity/bar`,
        'value-object/baz' : `${__dirname}/schema/value-object/baz`
      }
    }
  }
}
