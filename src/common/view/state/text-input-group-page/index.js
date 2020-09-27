class TextInputGroupPageAggregate
{
  constructor(composer)
  {
    this.composer = composer
  }

  async compose({
    lang
  })
  {
    return {
      lang
    }
  }
}

module.exports = TextInputGroupPageAggregate
