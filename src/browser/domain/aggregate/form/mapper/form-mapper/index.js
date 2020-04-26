class FormMapper
{
  map(domEvent)
  {
    return {
      form : domEvent.target
    }
  }
}

module.exports = FormMapper
