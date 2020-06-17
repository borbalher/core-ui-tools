class CoreHandlebarsHelperTranslate
{
  constructor(dictionary)
  {
    this.dictionary = dictionary
  }

  create()
  {
    return function(key)
    {
      return this.dictionary.translate(key)
    }
  }
}

module.exports = CoreHandlebarsHelperTranslate
