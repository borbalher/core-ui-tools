class FormMapper
{
  map(domEvent)
  {
    return {
      data :
      {
        form : domEvent.target
      }
    }
  }
}

module.exports = FormMapper
