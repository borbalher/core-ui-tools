const PageComposer = require('common/ui/aggregate/page/composer')

class TestComposer extends PageComposer
{
  compose({ classes })
  {
    return super.compose({
      template : 'test',
      schema   : 'entity/test',
      name     : 'test',
      id       : 'test',
      classes
    })
  }
}

module.exports = TestComposer
