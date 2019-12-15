module.exports = {
  core :
  {
    console :
    {
      default :
      {
        'maxObjectDepth'  : 10,
        'maxStringLength' : 300,
        'date'            : true,
        'dateFormat'      : 'yyyy-mm-dd HH:MM:ss',
        'debug'           : true,
        'index'           : false,
        'prefix'          : false,
        'stringify'       :
        {
          'space' : '\t'
        },
        'separator' : '\n'
      }
    },
    locator :
    {
      'core/console/factory' : `${__dirname}/factory`
    }
  }
}
