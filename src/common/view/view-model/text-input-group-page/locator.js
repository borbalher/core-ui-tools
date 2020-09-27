const TextInputGroupViewModel = require('.')

class TextInputGroupViewModelLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    textInputGroupComposer = this.locator.locate('ui/text-input-group/composer'),
    pageComposer           = this.locator.locate('ui/page/composer'),
    composer               = this.locator.locate('core/schema/composer')

    return new TextInputGroupViewModel({
      textInputGroupComposer,
      pageComposer,
      composer
    })
  }
}

module.exports = TextInputGroupViewModelLocator
