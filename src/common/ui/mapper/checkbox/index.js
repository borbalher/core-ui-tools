class CheckboxMapper
{
  map(domEvent)
  {
    return {
      value : domEvent.target.checked
    }
  }
}

module.exports = CheckboxMapper
