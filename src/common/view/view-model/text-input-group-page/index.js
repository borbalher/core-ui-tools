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
      id       : 'text-input-group-page',
      title    : 'Text input group page',
      lang,
      children : [
        {
          tag   : 'text-input-group',
          props : {
            value       : 'huhu',
            'data-bind' : 'data'
          }
        }
      ]
    }
  }
}

module.exports = TextInputGroupViewModelComposer
