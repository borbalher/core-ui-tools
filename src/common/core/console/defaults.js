module.exports = {
  maxObjectDepth  : 10,
  maxStringLength : 300,
  date            : true,
  dateFormat      : 'yyyy-mm-dd HH:MM:ss',
  debug           : true,
  index           : false,
  prefix          : false,
  inspect         :
  {
    options :
    {
      maxArrayLength : 10,
      colors         : true,
      showHidden     : false
    },
    styles : // white, grey, black, blue, cyan, green, magenta, red, yellow, bold, italic, underline, inverse
    {
      special   : 'cyan',
      number    : 'blue',
      bigint    : 'blue',
      boolean   : 'blue',
      undefined : 'grey',
      null      : 'bold',
      string    : 'green',
      symbol    : 'green',
      date      : 'magenta',
      regexp    : 'red'
    }
  },
  colors     : true,
  separator  : '\t',
  color      : 'white',
  background : 'black',
  stringify  : false
}