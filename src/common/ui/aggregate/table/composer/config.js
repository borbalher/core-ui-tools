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
            event          : 'action.clicked'
          }
        ],
        listeners :
        [
          {
            event   : 'action.clicked',
            locator : 'ui/table/listener/on-action-clicked'
          }
        ]
      }
    }
  }
}
