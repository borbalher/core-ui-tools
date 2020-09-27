class TextInputGroupViewModelComposer
{
  constructor({
    textInputGroupComposer,
    pageComposer,
    composer
  })
  {
    this.textInputGroupComposer = textInputGroupComposer
    this.pageComposer           = pageComposer
    this.composer               = composer
  }

  compose({
    lang
  })
  {
    return {
      id             : 'text-input-group-page',
      lang,
      textInputGroup :
      {
        value : 'huhu'
      }
    }
  }
}

module.exports = TextInputGroupViewModelComposer
