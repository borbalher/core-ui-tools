const dto = {
  '@meta' :
  {
    extends : 'entity/component'
  },
  text :
  {
    type        : 'string',
    'not-empty' : true
  },
  show :
  {
    type    : 'boolean',
    default : false
  }
}

module.exports = dto
