class FormMapperMapper
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

module.exports = FormMapperMapper
