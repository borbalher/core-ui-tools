module.exports = {
  '@meta' : {
    extends : 'entity/input'
  },
  label :
  {
    type        : 'string',
    'not-empty' : true
  },
  value :
  {
    type     : 'string',
    optional : true
  }
}
