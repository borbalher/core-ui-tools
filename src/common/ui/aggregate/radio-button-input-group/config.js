module.exports = {
  core :
  {
    locator :
    {
      'ui/radio-button-input-group/composer'   : `${__dirname}/composer`,
      'ui/radio-button-input-group/controller' : `${__dirname}/controller`
    }
  }
  // ui :
  // {
  //   'component' :
  //   {
  //     'radio-button-input-group' :
  //     {
  //       bindings :
  //       [
  //         {
  //           selector       : 'input[type="radio"]',
  //           domEvent       : 'change',
  //           domEventMapper : 'ui/input/mapper/input-data-mapper',
  //           event          : 'button.clicked'
  //         }
  //       ],
  //       listeners : [
  //         {
  //           event   : 'button.clicked',
  //           locator : 'ui/radio-button-input-group/listener/on-button-clicked'
  //         }
  //       ]
  //     }
  //   }
  // }
}
