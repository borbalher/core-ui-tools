const ViewModelToTree = require('.')

class ViewModelToTreeLocator
{
  locate()
  {
    return new ViewModelToTree()
  }
}

module.exports = ViewModelToTreeLocator
