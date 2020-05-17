module.exports = {
  infrastructure :
  {
    bus :
    {
      channels :
      {
        'view-model' :
        {
          listeners :
          {
            'view.model.changed' :
            {
              'core/component/listener/on-view-model-changed' : true
            }
          }
        }
      }
    }
  }
}
