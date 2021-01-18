const dto = {
  '@meta' :
  {
    extends : 'entity/input-group'
  },
  autocomplete :
  {
    type    : 'boolean',
    default : false
  },
  max :
  {
    type     : 'string',
    optional : true
  },
  min :
  {
    type     : 'string',
    optional : true
  }
}

module.exports = class
{
  locate()
  {
    return dto
  }
}

