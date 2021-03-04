module.exports = {
  maxArrayLength  : 10,
  maxObjectDepth  : 10,
  maxStringLength : 300,
  date            : true,
  dateFormat      : 'yyyy-mm-dd HH:MM:ss',
  debug           : true,
  index           : false,
  prefix          : false,
  inspect         : true,
  separator       : '\t',
  colors          : true,
  showHidden      : false,
  styles          :
  {
    special   : 'cyan',
    number    : 'yellow',
    bigint    : 'yellow',
    boolean   : 'yellow',
    undefined : 'grey',
    null      : 'bold',
    string    : 'green',
    symbol    : 'green',
    date      : 'magenta',
    regexp    : 'red'
  }
}
