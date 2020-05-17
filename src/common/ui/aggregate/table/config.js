module.exports = {
  core :
  {
    'component' :
    {
      'table' :
      {
        bindings :
        [
          {
            selector : '.table__cell-action',
            domEvent : 'click',
            map      : 'action.clicked',
            mapper   : 'table/mapper/action-clicked'
          }
        ],
        listeners :
        [
          {
            event   : 'action.clicked',
            locator : 'table/listener/action-clicked'
          }
        ]
      }
    },
    locator :
    {
      'table/listener/action-clicked' : `${__dirname}/listener/action-clicked`,
      'table/mapper/action-clicked'   : `${__dirname}/mapper/action-clicked`,
      'table'                         : __dirname
    }
  }
}
