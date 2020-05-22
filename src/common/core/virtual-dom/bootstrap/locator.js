const VirtualDOMBootstrap = require('.')

class VirtualDOMBootstrapLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const virtualDOM = this.locator.locate('core/virtual-dom')
    return new VirtualDOMBootstrap(virtualDOM)
  }
}

module.exports = VirtualDOMBootstrapLocator
