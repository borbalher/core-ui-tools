const dto = {
  '@meta' :
  {
    extends : 'entity/input'
  },
  value :
  {
    type     : 'string',
    optional : true
  },
  maxLength :
  {
    type     : 'integer',
    optional : true
  },
  placeholder :
  {
    type     : 'string',
    optional : true
  },
  maxLength :
  {
    type     : 'integer',
    optional : true
  },
  rows :
  {
    type     : 'integer',
    optional : true
  },
  columns :
  {
    type     : 'integer',
    optional : true
  }
}

module.exports = dto
