class VirtualDOMBootstrap
{
  constructor(virtualDOM)
  {
    this.virtualDOM = virtualDOM
  }

  bootstrap()
  {
    this.virtualDOM.bootstrap()
  }
}

module.exports = VirtualDOMBootstrap
