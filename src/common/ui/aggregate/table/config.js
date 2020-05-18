module.exports = {
  core :
  {
    locator :
    {
      'ui/table/mapper/action-clicked' : `${__dirname}/mapper/action-clicked`,
      'ui/table/composer'              : `${__dirname}/composer`,
      'ui/table/controller'            : `${__dirname}/controller`
    }
  },
  ui :
  {
    'component' :
    {
      'table' :
      {
        bindings :
        {
          'on.table.action.clicked' :
          {
            selector       : '.table__cell-action',
            domEvent       : 'click',
            domEventMapper : 'ui/table/mapper/action-clicked',
            event          : 'table.action.clicked',
            dispatch       : true
          }
        }
      }
    }
  }
}
