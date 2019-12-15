class CoreHandlebarsHelperExists
{
  constructor(isEqual)
  {
    this.isEqual = isEqual
  }

  create()
  {
    return (object, array) =>
    {
      const exists = array.filter((element) =>
      {
        return this.isEqual(object, element)
      })

      return exists.length !== 0
    }
  }
}

module.exports = CoreHandlebarsHelperExists
