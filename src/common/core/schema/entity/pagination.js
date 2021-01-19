const dto = {
  '@meta' :
  {
    extends : 'entity/component'
  },
  totalElements :
  {
    type    : 'integer',
    min     : 0,
    default : 0
  },
  totalPages :
  {
    type    : 'integer',
    min     : 0,
    default : 0
  },
  limit :
  {
    type    : 'integer',
    min     : 1,
    default : 1
  },
  offset :
  {
    type    : 'integer',
    min     : 2,
    default : 2
  },
  selectedPage :
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
    type : 'integer',
    min  : 1
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
