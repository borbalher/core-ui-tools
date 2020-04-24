const dto = {
  '@meta' :
  {
    extends : 'entity/component'
  },
  total :
  {
    type   : 'integer',
    min     : 0,
    default : 0
  },
  selected :
  {
    type    : 'integer',
    min     : 1,
    default : 1
  },
  firstPage :
  {
    type    : 'integer',
    min     : 1,
    max     : 1,
    default : 1
  },
  pages :
  {
    type       : 'integer',
    collection : true,
    default    : []
  },
  lastPage :
  {
    type     : 'integer',
    min      : 1,
    optional : true
  },
  leftOverflow :
  {
    type    : 'boolean',
    default : false
  },
  rightOverflow :
  {
    type    : 'boolean',
    default : false
  }
}

module.exports = dto
