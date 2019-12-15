module.exports = {
  core :
  {
    component :
    {
      'form' :
      {
        bindings : [
          {
            selector       : 'form',
            domEvent       : 'submit',
            map            : 'submit.form',
            preventDefault : true
          }
        ]
      }
    }
  }
}
