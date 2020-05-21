module.exports = {
  core :
  {
    locator :
    {
      'ui/table/composer' : __dirname
    }
  },
  ui :
  {
    'component' :
    {
      'table' :
      {
        bindings :
        [
          {
            selector       : '.table__cell-action',
            domEvent       : 'click',
            domEventMapper : 'ui/table/mapper/action-clicked',
            event          : 'table.action.clicked',
            dispatch       : true
          }
        ]
      }
    }
  }
}
