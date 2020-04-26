module.exports = {
  core :
  {
    ui :
    {
      'table' :
      {
        bindings :
        [
          {
            selector : '.table__cell-action',
            event    : 'click',
            map      : 'action.clicked',
            mapper   : 'table/mapper/action-clicked'
          }
        ],
        listeners :
        [
          {
            event    : 'action.click',
            listener : 'table/listener/action-click'
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
