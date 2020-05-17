module.exports = {
  core :
  {
    locator :
    {
      'ui/table/listener/on-action-clicked' : `${__dirname}/listener/on-action-clicked`,
      'ui/table/mapper/action-clicked'      : `${__dirname}/mapper/action-clicked`,
      'ui/tanñe/composer'                   : `${__dirname}/composer`,
      'ui/tanñe/controller'                 : `${__dirname}/controller`
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
