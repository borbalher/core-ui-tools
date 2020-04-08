const Component = require('core-ui-tools/view/ui')

class PageBlockerComponent extends Component
{
  changeIsBlocked(pageBlockerId, isBlocked)
  {
    const pageBlocker = this.getComponent(pageBlockerId)

    if(isBlocked)
    {
      pageBlocker.isBlocked = true
      document.querySelector(`#${pageBlockerId} .page-blocker__wrapper`).classList.add('--visible')
    }
    else
    {
      pageBlocker.isBlocked = false
      document.querySelector(`#${pageBlockerId} .page-blocker__wrapper`).classList.remove('--visible')
    }

    this.emit(pageBlockerId, 'page.blocked', { id: pageBlockerId, isBlocked  })
    this.setComponent(pageBlockerId, pageBlocker)
  }
}

module.exports = PageBlockerComponent
