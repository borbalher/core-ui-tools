class FormMapperMapper
{
  map(domEvent)
  {
    return {
      data :
      {
        id : domEvent.target.id
      }
    }
  }
}

module.exports = FormMapperMapper
